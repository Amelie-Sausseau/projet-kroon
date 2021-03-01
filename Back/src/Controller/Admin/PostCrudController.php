<?php

namespace App\Controller\Admin;

use App\Entity\Post;
use App\Entity\Tag;
use App\Repository\PostRepository;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Post::class;
    }

    public function createEntity(string $entityFqcn)
    {
        $post = new Post();
        
        return $post;
    }

    public function configureFields(string $pageName): iterable
    {
        return  [
            IdField::new('id')->hideOnForm(),
            TextField::new('title'),
            TextField::new('body'),
            //AssociationField::new('tag', 'Tag'),
            TextField::new('soundFile'),
            BooleanField::new('isActive'),
            BooleanField::new('isReported'),
            BooleanField::new('isSolved'),
            BooleanField::new('isClosed'),
            DateTimeField::new('createdAt')->hideOnForm(),
            DateTimeField::new('updatedAt')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setDefaultSort(['isReported'=>'DESC'])
        ;
    }
    
}
