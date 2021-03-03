<?php

namespace App\Controller\Api\V1;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    /**
     * @Route("api/contact", name="contact", methods="POST")
     */
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $contactFormData = json_decode($request->getContent(), true);
        $form = $this->createForm(ContactType::class);
        $form->submit($contactFormData, true);

        if($form->isValid()) {
            
            $message = (new Email())
                ->from($contactFormData['email'])
                ->to('kroon.contact@gmail.com')
                ->subject('Nouveau message depuis Kroon')
                ->text('Envoyé par : '.$contactFormData['name'].'(' .$contactFormData['email'].')'.\PHP_EOL.
                    $contactFormData['message'],
                    'text/plain');
            $mailer->send($message);

            return $this->json(["success" => true], Response::HTTP_OK);
        }
        return $this->json(["success" => false, "errors" => $form->getErrors(true),], Response::HTTP_BAD_REQUEST);
    }
}
