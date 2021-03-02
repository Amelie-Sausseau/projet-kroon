<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class Mailer {

    /**
     * @var MailerInterface
     */
    private $mailer;


    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendEmail($email)
    {
        $email = (new TemplatedEmail())
        ->from(new Address('kroon.contact@gmail.com', 'Kroon'))
        ->to(new Address($email))
        ->subject('Bienvenue nouveau Krooner !')

        ->htmlTemplate('emails/signup.html.twig');

        $this->mailer->send($email);

    }


}