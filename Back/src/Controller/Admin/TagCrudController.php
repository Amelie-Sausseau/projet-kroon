<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class TagCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Tag::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id', 'ID')->hideOnForm(),
            TextField::new('name', 'Catégorie'),
            DateTimeField::new('createdAt', 'Créée le')->hideOnForm(),
            DateTimeField::new('updatedAt', 'Modifiée le')->hideOnForm(),
        ];
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
