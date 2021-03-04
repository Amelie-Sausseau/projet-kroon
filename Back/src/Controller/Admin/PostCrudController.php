<?php

namespace App\Controller\Admin;

use App\Entity\Post;
use App\Entity\Tag;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
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

    public function configureFields(string $pageName): iterable
    {
        return  [
            IdField::new('id', 'ID')->hideOnForm(),
            TextField::new('title', 'Titre'),
            TextField::new('body', 'Description'),
            AssociationField::new('tags', 'Catégorie'),
            TextField::new('soundFile', 'Son'),
            BooleanField::new('isActive', 'Actif')->hideOnForm(),
            BooleanField::new('isReported', 'Signalé')->hideOnForm(),
            BooleanField::new('isSolved', 'Résolu')->hideOnForm(),
            BooleanField::new('isClosed', 'Clos')->hideOnForm(),
            DateTimeField::new('createdAt', 'Créé le')->hideOnForm(),
            DateTimeField::new('updatedAt', 'Modifié le')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setDefaultSort(['isReported'=>'DESC'])
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        // This method is used to create the permissions according to roles for the CRUD methods
        return $actions
        ->setPermission(Action::NEW, 'ROLE_MODERATOR')
        ->setPermission(Action::EDIT, 'ROLE_MODERATOR')
        ->setPermission(Action::DELETE, 'ROLE_ADMIN')
    ;
    } 
    
}
