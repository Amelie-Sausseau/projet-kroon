<?php

namespace App\Controller\Api\V1;

use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    /**
     * @Route("/post", name="post")
     */
    public function index(): Response
    {
        return $this->render('post/index.html.twig', [
            'controller_name' => 'PostController',
        ]);
    }

    /**
     * @Route("/post/{id}", name="read", methods="GET")
     */
    public function read(Post $post): Response
    {
        return $this->json($post, 200, [], ['groups' => 'post:test']);
    }
}
