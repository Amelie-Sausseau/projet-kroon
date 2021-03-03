<?php

namespace App\Form;

use App\Entity\Post;
use App\Entity\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Vich\UploaderBundle\Form\Type\VichFileType;

class CreatePostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'constraints' => [
                    new Length([
                    'min' => 5,
                    'max' => 50])
                ]
            ]) 

            ->add('body', TextType::class)


            //->add('tags', EntityType::class, [
            //    'constraints' => new NotBlank,
            //    "class" => Tag::class,
            //    "choice_label" => function ($tag) {
            //        return $tag->getName();
            //    },
            //])

            ->add('soundFile', VichFileType::class, [
                'label' => 'Son',
                'required' => false,
                'mapped' => false,
                
                ]
            );
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
