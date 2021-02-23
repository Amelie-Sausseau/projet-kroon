<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\RegisterType;
use App\Form\UserEditType;
use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("api/v1/users", name="api_v1_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods="GET")
     */
    public function browse(UserRepository $userRepo): Response
    {
        return $this->json($userRepo->findAll(), 200, [], ['groups' => 'user:all']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(User $user)
    { 
        return $this->json($user, 200, [], ['groups' => 'user:one']);
    }

    /**
     * @Route("/register", name="register", methods={"POST"})
     */

    public function register(Request $request, UserPasswordEncoderInterface $encoder, UserRepository $user, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {   
        $userData = json_decode($request->getContent(), true);

        $user = new User();

        $form = $this->createForm(RegisterType::class, $user);

        $form->submit($userData, true);

        if ($form->isValid()) {
            // Encodage du mot de passe
            $user->setPassword($encoder->encodePassword($user, $user->getPassword()));
            // Filtrage du name pour créer un slug unique
            $user->setSlug($userData['name'] . "#" . mt_rand(1000,9999));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // on gère l'image après un 1er flush car on a besoin de l'id pour générer le nom
            $avatar = $form->get('avatar')->getData();
            $fileUploader->moveUserAvatar($avatar, $user);

            // il faut penser à flush à nouveau pour prendre en compte le nom de l'image
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
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        $postData = json_decode($request->getContent(), true);
        // Contrainte pour qu'un utilisateur connecté modifie son propre compte
        if ($user !== $this->getUser()) {
            throw $this->createAccessDeniedException();
         }
        $user->setUpdatedAt(new \DateTime());
        $form = $this->createForm(UserEditType::class, $user);
        $form->submit($postData, false);

        if ($form->isValid()) { 

        $this->getDoctrine()->getManager()->flush();

         /** @var UploadedFile $avatarFile */
         $avatarFile = $form->get('avatar')->getData();

         // this condition is needed because the 'avatar' field is not required
         if ($avatarFile) {
             $originalFilename = pathinfo($avatarFile->getClientOriginalName(), PATHINFO_FILENAME);
             // this is needed to safely include the file name as part of the URL
             $safeFilename = $slugger->slug($originalFilename);
             $newFilename = $safeFilename.'-'.uniqid().'.'.$avatarFile->guessExtension();

             // Move the file to the directory where avatars are stored
             try {
                 $avatarFile->move(
                     $this->getParameter('avatars_directory'),
                     $newFilename
                 );
             } catch (FileException $e) {
                 // ... handle exception if something happens during file upload
             }

             // updates the 'brochureFilename' property to store the PDF file name
             // instead of its contents
             $user->setAvatar($newFilename);
         }

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
     * @Route("/{id}/bookmarks", name="bookmark_browse", methods="GET")
     */
    public function bookmark(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => 'user:bookmarkedPosts']);
    }

    /**
     * @Route("/{id}/comments", name="comment_browse", methods="GET", requirements={"id"="\d+"})
     */
    public function comment(User $user, CommentRepository $commentRepo): Response
    {
        $comments = $commentRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);
        //dd($comments);
        return $this->json($comments, 200, [], ['groups' => 'user:commentedPosts']);
    }

    /**
     * @Route("/{id}/posts", name="post_browse", methods="GET", requirements={"id"="\d+"})
     */
    public function post(User $user, PostRepository $postRepo): Response
    {
        $posts = $postRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);
        //dd($posts);
        return $this->json($posts, 200, [], ['groups' => 'user:writtenPosts']);
    }
}
