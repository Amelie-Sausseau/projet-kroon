<?php

namespace App\Controller\Api\V1;

use App\Entity\Comment;
use App\Entity\User;
use App\Entity\Post;
use App\Entity\Tag;
use App\Form\CommentEditType;
use App\Form\CreateCommentType;
use App\Form\CreatePostType;
use App\Form\PostEditType;
use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
    public function add(Request $request, EntityManagerInterface $entityManager, PostRepository $postRepo): Response
    {   
      
        $postData = json_decode($request->getContent(), true);

        $post = new Post();

        $form = $this->createForm(CreatePostType::class, $post);
        $form->submit($postData, true);

        if ($form->isValid()) {
            $post->setUser($this->getUser());

            $sound = $form->get('sound')->getData();
            // dd($sound);
            $post->setSound($sound);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($post);
            $entityManager->flush();

            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        }

        return $this->json(
            [
                "success" => false,
                "errors" => $form->getErrors(true),
            ],
            Response::HTTP_BAD_REQUEST
        );
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, Post $post, User $user): Response
    {
        $userData = json_decode($request->getContent(), true);
        // Contrainte pour qu'un utilisateur connecté modifie son propre post
        $author = $post->getUser();
        if ($author !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }
        $post->setUpdatedAt(new \DateTime());
        $form = $this->createForm(PostEditType::class, $post);
        $form->submit($userData, false);

        if ($form->isValid()) { 

        $this->getDoctrine()->getManager()->flush();

        return $this->json(
            [
                "success" => true
            ],
            Response::HTTP_OK
        );
    }

    return $this->json(
        [
            "success" => false,
            "errors" => $form->getErrors(true),
        ],
        Response::HTTP_BAD_REQUEST
    );
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
     * @Route("/{id}/report", name="report", methods="PUT", requirements={"id"="\d+"})
     */
    public function report(EntityManagerInterface $em, Post $post): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);
        // dd($user, $this->getUser());
        if (! empty($this->getUser())) {

            $post->setIsReported(true);
            // dd($post);
            $em->persist($post);

            $em->flush();

            return $this->json(
                [
                    "success" => true,
                    "message" => 'Post signalé'
                ],
                Response::HTTP_OK
            );
        }

        return $this->json(
            [
                "success" => false,
            ],
            Response::HTTP_BAD_REQUEST
        );
    }

    /**
     * @Route("/{id}/solve", name="solve", methods="PUT", requirements={"id"="\d+"})
     */
    public function solve(EntityManagerInterface $em, Post $post): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);
        // dd($user, $this->getUser());
        $author = $post->getUser();
        if ($author !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }
        
        if (! empty($this->getUser())) {

            $post->setIsSolved(true);
            // dd($post);
            $em->persist($post);

            $em->flush();

            return $this->json(
                [
                    "success" => true,
                    "message" => 'Post résolu'
                ],
                Response::HTTP_OK
            );
        }

        return $this->json(
            [
                "success" => false,
            ],
            Response::HTTP_BAD_REQUEST
        );
    }



    /**
     * @Route("/{id}/bookmark", name="add_bookmark", methods="POST", requirements={"id"="\d+"})
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
     * @Route("/{id}/bookmark", name="delete_bookmark", methods="DELETE", requirements={"id"="\d+"})
     */
    public function deleteBookmark(EntityManagerInterface $em, Post $post): Response
    {
     
        $em->remove($post);

        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:deleteBookmark']);
    }

    /**
     * @Route("/{id}/comment", name="add_comment", methods={"POST"}, requirements={"id"="\d+"})
     */
    public function addComment(Request $request, EntityManagerInterface $entityManager, CommentRepository $comment, Post $post): Response
    {
        $commentData = json_decode($request->getContent(), true);
        // dd($commentData);
        $comment = new Comment();

        $form = $this->createForm(CreateCommentType::class, $comment);

        $form->submit($commentData, true);

        if ($post->getIsActive() && !$post->getIsClosed() && $form->isValid()) {
            $comment->setPost($post);
            $comment->setUser($this->getUser());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->json(
                [
                    "success" => true,
                    ['id' => $post->getId()]
                ],
                Response::HTTP_OK
            );
        }

        return $this->json(
            [
                "success" => false,
                "errors" => $form->getErrors(true),
            ],
            Response::HTTP_BAD_REQUEST
        );
    }

}