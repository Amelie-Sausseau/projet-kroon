<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\RegisterType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
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

    public function register(Request $request, UserPasswordEncoderInterface $encoder, UserRepository $user, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
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

            $userFile = $form->get('avatar')->getData();

            if ($userFile) {
                $originalFilename = pathinfo($userFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$userFile->guessExtension();

                try {
                    $userFile->move(
                        $this->getParameter('avatar_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
        
                }

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
     * @Route("/{id}", name="edit", methods="PUT", requirements={"id"="\d+"})
     */
    public function edit(Request $request, User $user): Response
    {
        $userData = json_decode($request->getContent(), true);
        // Contrainte pour qu'un utilisateur connecté modifie son propre compte
        // if ($user !== $this->getUser()) {
        //    throw $this->createAccessDeniedException();
        // }
        $user->setUpdatedAt(new \DateTime());
        $form = $this->createForm(UserEditType::class, $user);
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
     * @Route("/{id}/bookmarks", name="bookmark_browse", methods="GET")
     */
    public function bookmark(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => 'user:bookmarks']);
    }

    /**
     * @Route("/{id}/comments", name="comment_browse", methods="GET")
     */
    public function comment(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => 'user:comments']);
    }

    /**
     * @Route("/{id}/posts", name="post_browse", methods="GET")
     */
    public function post(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => 'user:posts']);
    }
}
