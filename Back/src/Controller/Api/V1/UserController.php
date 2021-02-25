<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\RegisterType;
use App\Form\UserEditType;
use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Validator\Constraints\IsNull;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;

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
            // $avatar = $form->get('avatar')->getData();
            // $fileUploader->moveUserAvatar($avatar, $user);

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
     * @Route("/{id}", name="edit", methods={"POST"}, requirements={"id"="\d+"})
     */
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager, ValidatorInterface $validator, FileUploader $fileUploader): Response
    {   
        if ($user !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(UserEditType::class, $user);
        $user->setUpdatedAt(new \DateTime());
        $postData = array_merge($request->request->all(), $request->files->all());
        $form->submit($postData, false);
        //dd($postData);
        $avatarFile = $request->files->get('avatarFile'); 
        //dd($avatarFile);
        
        if ($avatarFile) {
            $fileUploader->uploadAvatar($avatarFile, $user);
            //dd($uploadedFile);
            $uploadedFile = $avatarFile->move($fileUploader->getAvatarDirectory(), $avatarFile);
            //dd($uploadedFile);
            $user->setAvatar($uploadedFile);
            //dd($avatarFile);
        }

        $errors = $validator->validate($user);

        //dd($errors);
        // FIXME: Si $errors['violations'] est vide alors.. ??
        if ($errors == true) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
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
        if ($user !== $this->getUser()) {
            return $this->json($user, 200, [], ['groups' => 'user:bookmarkedPosts']);
        }

        return $this->json(
            [
                "success" => false
            ],
            Response::HTTP_BAD_REQUEST
        );
    }

    /**
     * @Route("/comments", name="comment_browse", methods="GET", requirements={"id"="\d+"})
     */
    public function comment(CommentRepository $commentRepo): Response
    {     
        $user = $this->getUser();
        //dd($user);
        if ($this->getUser()) {
            $comments = $commentRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);
            //dd($comments);

            return $this->json($comments, 200, [], ['groups' => 'user:commentedPosts']);
        }

        return $this->json(
            [
                "success" => false,
            ],
            Response::HTTP_UNAUTHORIZED
        );
    }

    /**
     * @Route("/posts", name="post_browse", methods="GET", requirements={"id"="\d+"})
     */
    public function post(PostRepository $postRepo): Response
    {
        $user = $this->getUser();
        //dd($user);
        if ($this->getUser()) {
            $posts = $postRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);
            //dd($posts);

            return $this->json($posts, 200, [], ['groups' => 'user:writtenPosts']);
        }

        return $this->json(
            [
                "success" => false
            ],
            Response::HTTP_UNAUTHORIZED
        );
    }
}
