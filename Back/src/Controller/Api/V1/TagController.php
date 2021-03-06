<?php

namespace App\Controller\Api\V1;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("api/v1/tags", name="api_v1_tag_")
 */
class TagController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods="GET")
     */
    public function browse(TagRepository $tagRepo): Response
    {
        return $this->json($tagRepo->findAll(), 200, [], ['groups' => 'tag:all']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(Tag $tag): Response
    {
        return $this->json($tag, 200, [], ['groups' => 'tag:one']);
    }

    /**
     * @Route("/{id}/posts", name="browse_posts", methods="GET", requirements={"id"="\d+"})
     */
    public function browsePost(Tag $tag): Response
    {
        return $this->json($tag, 200, [], ['groups' => 'tag:allPosts']);
    }

    /**
     * @Route("/", name="add", methods="POST")
     */
    public function add(Request $request, EntityManagerInterface $em, TagRepository $tag): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $tag = new Tag();
        $tag->setName($infoFromClient['name']);
        $em->persist($tag);
        $em->flush();

        return $this->json($tag, 201, [], ['groups' => 'tag:add']);
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, EntityManagerInterface $em, Tag $tag): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $tag->setName($infoFromClient['name']);
        $tag->setUpdatedAt(new \DateTime());
        $em->persist($tag);
        $em->flush();

        return $this->json($tag, 200, [], ['groups' => 'tag:edit']);
    }
}