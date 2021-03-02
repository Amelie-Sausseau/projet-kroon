<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\RegisterType;
use App\Form\UserEditType;
use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use App\Service\Mailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Mailer as MailerMailer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
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
    public function register(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager, Mailer $mailer): Response
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

            $mailer->sendEmail($user->getEmail());

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
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager, SluggerInterface $slugger ,ValidatorInterface $validator, FileUploader $fileUploader): Response
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
            $originalFilename = pathinfo($avatarFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$avatarFile->guessExtension();

                try {
                    $avatarFile->move(
                        $this->getParameter('avatar_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
        
                }
            $url = 'http://ec2-3-82-153-17.compute-1.amazonaws.com/';
            $user->setAvatar($url.'uploads/avatar/'.$newFilename);
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
     * @Route("/bookmarks", name="bookmark_browse", methods="GET")
     */
    public function bookmark(): Response
    {
        $user = $this->getUser();
       
        $bookmarks = $user->getBookmark();
            
        return $this->json($bookmarks, 200, [], ['groups' => 'user:bookmarkedPosts']);
    }

    /**
     * @Route("/comments", name="comment_browse", methods="GET")
     */
    public function comment(CommentRepository $commentRepo): Response
    {     
        $user = $this->getUser();

        $comments = $commentRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);

        return $this->json($comments, 200, [], ['groups' => 'user:commentedPosts']);
    }

    /**
     * @Route("/posts", name="post_browse", methods="GET")
     */
    public function post(PostRepository $postRepo): Response
    {
        $user = $this->getUser();

        $posts = $postRepo->findBy(['user' => $user], ['createdAt' => 'DESC']);

        return $this->json($posts, 200, [], ['groups' => 'user:writtenPosts']);
    }
}
