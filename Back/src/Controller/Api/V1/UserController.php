<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

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
        return $this->json($userRepo->findAll(), 200, [
            'Access-Control-Allow-Origin' => '*'
        ], ['groups' => 'user:all']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(User $user)
    { 
        return $this->json($user, 200, [
            'Access-Control-Allow-Origin' => '*'
        ], ['groups' => 'user:one']);
    }

    /**
     * @Route("/register", name="register", methods="POST")
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager, UserRepository $userRepo, User $user): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $user = new User();

        $form = $this->createForm(RegisterType::class, $user);

        $form->handleRequest($request);

        if ($form->isValid()) {
            // Assignation du rôle par défaut 
            $user->setRoles(["ROLE_USER"]);
            $user->setName($userRepo->find($infoFromClient['name']));
            $user->setSlug($userRepo->find($infoFromClient['name']) . "#" . uniqid());
            $user->setEmail($userRepo->find($infoFromClient['email']));

            // récupérer le mot de passe en clair
            $rawPassword = $user->getPassword($userRepo->find($infoFromClient['password']));

            if (! empty($rawPassword))
            {
                // l'encoder
                $encodedPassword = $encoder->encodePassword($user, $rawPassword);
            
                // le renseigner dans l'objet
                $user->setPassword($encodedPassword);
            }

            $user->setBio($userRepo->find($infoFromClient['bio']));
            $user->setAvatar($userRepo->find($infoFromClient['avatar']));

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('api_login'); // => REDIRECTION CONNEXION REACT
        }
        
        return $this->json($user, 201, [], ['groups' => 'user:add']);
    }

    /**
     * @Route("/{id}", name="edit", methods="PUT")
     */
    public function edit(Request $request, EntityManagerInterface $em, UserRepository $user): Response
    {
        $infoFromClient = json_decode($request->getContent(), true);

        $user = new User();
        //$post->setUser($user->find($infoFromClient['user']));
        //$post->setTitle(($infoFromClient['title']));
        // dd($post);
        $em->persist($user);
        $em->flush();

        return $this->json($user, 200, [], ['groups' => 'user:edit']);
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
