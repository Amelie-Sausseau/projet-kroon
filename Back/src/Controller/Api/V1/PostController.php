<?php

namespace App\Controller\Api\V1;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("api/v1/posts", name="api_v1_post_")
 */
class PostController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods="GET")
     */
    public function browse(PostRepository $postRepo): Response
    {
        return $this->json($postRepo->findAll(), 200, [], ['groups' => 'post:all']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(Post $post): Response
    {
        return $this->json($post, 200, [], ['groups' => 'post:one']);
    }

    /**
     * @Route("/", name="add", methods="POST")
     */
    public function add(Request $request, EntityManagerInterface $em, PostRepository $post): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $post = new Post();
        //$post->setpost($post->find($infoFromClient['post']));
        //$post->setTitle(($infoFromClient['title']));
        // dd($post);
        $em->persist($post);
        $em->flush();
        

        return $this->json($post, 201, [], ['groups' => 'post:add']);
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, EntityManagerInterface $em, Post $post): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $post->setUser($this->getUser());

        $post->setTitle(($infoFromClient['title']));
        $post->setBody(($infoFromClient['body']));
        // dd($post);
        $em->persist($post);

        $post->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:edit']);
    }

    /**
     * @Route("/{id}", name="delete", methods="DELETE", requirements={"id"="\d+"})
     */
    public function delete(EntityManagerInterface $em, Post $post): Response
    {
        $em->remove($post);

        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:delete']);;
    }


    /**
     * @Route("/{id}/bookmark", name="add_bookmark", methods="POST")
     */
    public function addBookmark(Request $request, EntityManagerInterface $em, PostRepository $post): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $post = new Post();
        //$post->setPost($post->find($infoFromClient['post']));
        //$post->setTitle(($infoFromClient['title']));
        // dd($post);
        $em->persist($post);
        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:addBookmark']);
    }

    /**
     * @Route("/{id}/bookmark", name="delete_bookmark", methods="DELETE")
     */
    public function deleteBookmark(EntityManagerInterface $em, Post $post): Response
    {
     
        $em->remove($post);

        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:deleteBookmark']);
    }

}