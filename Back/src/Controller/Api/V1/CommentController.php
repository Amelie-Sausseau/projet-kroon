<?php

namespace App\Controller\Api\V1;

use App\Entity\Comment;
use App\Entity\User;
use App\Form\CreateCommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("api/v1/comments", name="api_v1_comment_")
 */
class CommentController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods="GET")
     */
    public function browse(CommentRepository $commentRepo): Response
    {
        return $this->json($commentRepo->findAll(), 200, [], ['groups' => 'comment:all']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(Comment $comment): Response
    {
        return $this->json($comment, 200, [], ['groups' => 'comment:one']);
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, EntityManagerInterface $em, Comment $comment): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);
        
        $comment->setBody(($infoFromClient['body']));
        // dd($comment);
        $em->persist($comment);

        $comment->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:edit']);
    }

    /**
     * @Route("/{id}", name="delete", methods="DELETE", requirements={"id"="\d+"})
     */
    public function delete(EntityManagerInterface $em, Comment $comment): Response
    {
        $em->remove($comment);

        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:delete']);;
    }

        /**
     * @Route("/{id}/report", name="report", methods="PUT", requirements={"id"="\d+"})
     */
    public function report(Request $request, EntityManagerInterface $em, Comment $comment, User $user): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);
        // dd($user, $this->getUser());
        if (! empty($this->getUser())) {

            $comment->setIsReported(true);
            // dd($comment);
            $em->persist($comment);

            $em->flush();

            return $this->json(
                [
                    "success" => true,
                    "message" => 'Commentaire signalé'
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
     * @Route("/{id}/like", name="add_like", methods="POST")
     */
    public function addLike(Request $request, EntityManagerInterface $em, CommentRepository $comment): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);

        $comment = new Comment();
        $comment->setLikes($comment->getLikes() + 1 );
        // dd($comment);
        $em->persist($comment);
        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:addLike']);
    }

    /**
     * @Route("/{id}/like", name="delete_like", methods="POST")
     */
    public function deleteLike(Request $request, EntityManagerInterface $em, CommentRepository $comment): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);

        $comment = new Comment();
        $comment->setLikes($comment->getLikes() - 1 );
        // dd($comment);
        $em->persist($comment);
        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:deleteLike']);
    }

}
