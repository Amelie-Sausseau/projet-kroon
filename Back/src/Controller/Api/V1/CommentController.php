<?php

namespace App\Controller\Api\V1;

use App\Entity\Comment;
use App\Entity\User;
use App\Form\CommentEditType;
use App\Repository\CommentRepository;
use App\Repository\UserRepository;
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
    * @Route("/liked", name="lasts", methods={"GET"})
    */
    public function commentsMostLiked(CommentRepository $commentRepo)
    {
        return $this->json($commentRepo->commentsMostLiked(), 200, [], ['groups' => 'comment:one']);
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, Comment $comment, UserRepository $user): Response
    {
        $commentData = json_decode($request->getContent(), true);
        // Contrainte pour qu'un utilisateur connecté modifie son propre post
        // dd($comment->getPost()->getUser(), $this->getUser());
        $author = $comment->getPost()->getUser();
        if ($author !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }
        $comment->setUpdatedAt(new \DateTime());
        $form = $this->createForm(CommentEditType::class, $comment);
        $form->submit($commentData, false);

        if ($form->isValid()) {
            $comment->setUser($author);

            $this->getDoctrine()->getManager()->flush();

            return $this->json(
                [
                "success" => true,
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
    public function delete(EntityManagerInterface $em, Comment $comment): Response
    {
        $em->remove($comment);

        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:delete']);;
    }

        /**
     * @Route("/{id}/report", name="report", methods="PUT", requirements={"id"="\d+"})
     */
    public function report(EntityManagerInterface $em, Comment $comment): Response
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
     * @Route("/{id}/like", name="add_like", methods="PUT")
     */
    public function addLike(EntityManagerInterface $em, Comment $comment): Response
    {
        //$infoFromClient = json_decode($request->getContent(), true);

        $comment->setLikes($comment->getLikes() + 1 );
        // dd($comment);
        $em->persist($comment);
        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:addLike']);
    }

    /**
     * @Route("/{id}/unlike", name="delete_like", methods="PUT")
     */
    public function deleteLike(EntityManagerInterface $em, Comment $comment): Response
    {
        // $infoFromClient = json_decode($request->getContent(), true);

        $comment->setLikes($comment->getLikes() - 1 );
        // dd($comment);
        $em->persist($comment);
        $em->flush();

        return $this->json($comment, 200, [], ['groups' => 'comment:deleteLike']);
    }

}
