<?php

namespace App\Form;

use App\Entity\Post;
use App\Entity\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;

class CreatePostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'constraints' => new NotBlank,
            ])

            ->add('body', TextType::class, [
                'constraints' => new NotBlank,
            ])

            //->add('tags', EntityType::class, [
            //    'constraints' => new NotBlank,
            //    "class" => Tag::class,
            //    "choice_label" => function ($tag) {
            //        return $tag->getName();
            //    },
                //Pour permettre de choisir plusieurs catégories : "multiple" => true,
            //])

            ->add('sound', TextType::class, [
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
            'csrf_protection' => false,
            'attr' => ['novalidate' => 'novalidate'],
        ]);
    }
}
