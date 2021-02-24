<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\File;

class RegisterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // FIXME: Ligne + méthode onPreSetData crées par Mickael => testée, devrait fonctionner dans un UserEditType
        $builder->addEventListener(FormEvents::PRE_SET_DATA, [ $this, 'onPreSetData' ]);

        $builder
            ->add('name', TextType::class, [
                'constraints' => new NotBlank,
            ])

            ->add('password', PasswordType::class, [
                'constraints' => new NotBlank,
                //'type' => PasswordType::class,
                //'invalid_message' => 'Les deux mot de passe ne sont pas identiques',
                //'first_options'  => ['label' => 'Mot de passe'],
                //'second_options' => ['label' => 'Repeter le mot de passe'],
            ])

            ->add('email', EmailType::class, [
                'constraints' => [
                    new Email,
                    new NotBlank,
                ],
            ])
            
        ;
    }

    public function onPreSetData(FormEvent $event)
    {
        $builder = $event->getForm();
        $data = $event->getData();
        // par exemple 
        if($data->getId()){
            $builder->add('bio');
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_protection' => false,
            'attr' => ['novalidate' => 'novalidate'],
        ]);
    }
}