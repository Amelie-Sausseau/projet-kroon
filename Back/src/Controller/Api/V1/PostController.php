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
use App\Repository\TagRepository;
use App\Service\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
        return $this->json($postRepo->findAll(), 200, [], ['groups' => 'post:one']);
    }

    /**
     * @Route("/{id}", name="read", methods="GET", requirements={"id"="\d+"})
     */
    public function read(Post $post): Response
    {
        return $this->json($post, 200, [], ['groups' => 'post:one']);
    }

    /**
    * @Route("/lasts", name="lasts", methods={"GET"})
    */
    public function findLastsFivePosts(PostRepository $postRepo)
    {
        return $this->json($postRepo->findLastsFivePosts(), 200, [], ['groups' => 'post:one']);
    }

    /**
     * @Route("/", name="add", methods="POST")
     */
    public function add(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger, TagRepository $tagRepo): Response
    {   
        $post = new Post();

        $form = $this->createForm(CreatePostType::class, $post);
        $postData = array_merge($request->request->all(), $request->files->all());
        $form->submit($postData, true);

        $soundFile = $request->files->get('soundFile');
        // dd($soundFile);
        if ($soundFile) {
            $originalFilename = pathinfo($soundFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$soundFile->guessExtension();
                
                try {
                    $soundFile->move(
                        $this->getParameter('sound_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
        
                }
            $url = 'http://ec2-3-82-153-17.compute-1.amazonaws.com/';
            $post->setSound($url.'uploads/sound/'.$newFilename);
            
        }
            $post->setUser($this->getUser());

            //$tag = $tagRepo->find($request->request->get('tag'));
            //dd($tag);
            //$post->addTag($tag);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($post);
            $entityManager->flush();

            return $this->json(
                [
                    "success" => true
                ],
                Response::HTTP_OK
            );
        

        return $this->json(
            [
                "success" => false,
                "errors" => $form->getErrors(true),
            ],
            Response::HTTP_BAD_REQUEST
        );
    }

    /**
     * @Route("/{id}", name="edit", methods="POST", requirements={"id"="\d+"})
     */
    public function edit(Request $request, Post $post, SluggerInterface $slugger, ValidatorInterface $validator): Response
    {
        $author = $post->getUser();
        if ($author !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(PostEditType::class, $post);
        $post->setUpdatedAt(new \DateTime());
        $postData = array_merge($request->request->all(), $request->files->all());
        $form->submit($postData, false);
        //dd($postData);
        $soundFile = $request->files->get('soundFile'); 
        //dd($soundFile);
        
        if ($soundFile) {
            $originalFilename = pathinfo($soundFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$soundFile->guessExtension();

                try {
                    $soundFile->move(
                        $this->getParameter('sound_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
        
                }
            $url = 'http://ec2-3-82-153-17.compute-1.amazonaws.com/';
            $post->setSound($url.'uploads/sound/'.$soundFile);
        }

        $errors = $validator->validate($post);

        //dd($errors);
        // FIXME: Si $errors['violations'] est vide alors.. ??
        if ($errors == true) {

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
    public function addBookmark(Request $request, EntityManagerInterface $em, Post $post): Response
    {
        $user = $this->getUser();

        $bookmark = $user->addBookmark($post);
        //dd($bookmark);

        $em->persist($bookmark);
        $em->flush();

        return $this->json($bookmark, 200, [], ['groups' => 'post:addBookmark']);
    }

    /**
     * @Route("/{id}/bookmark", name="delete_bookmark", methods="DELETE", requirements={"id"="\d+"})
     */
    public function deleteBookmark(EntityManagerInterface $em, Post $post): Response
    {
        $user = $this->getUser();

        $bookmark = $user->removeBookmark($post);
        //dd($bookmark);

        $em->persist($bookmark);
        $em->flush();

        return $this->json($post, 200, [], ['groups' => 'post:deleteBookmark']);
    }

    /**
     * @Route("/{id}/comment", name="add_comment", methods={"POST"}, requirements={"id"="\d+"})
     */
    public function addComment(Request $request, EntityManagerInterface $entityManager, CommentRepository $comment, Post $post): Response
    {
        $commentData = json_decode($request->getContent(), true);
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