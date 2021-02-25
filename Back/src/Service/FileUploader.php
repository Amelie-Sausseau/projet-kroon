<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploader
{
    private $avatarDirectory;
    private $soundDirectory;
    private $slugger;

    public function __construct($avatarDirectory, $soundDirectory, SluggerInterface $slugger)
    {
        $this->avatarDirectory = $avatarDirectory;
        $this->soundDirectory = $soundDirectory;
        $this->slugger = $slugger;
    }

    public function uploadAvatar(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move($this->getAvatarDirectory(), $fileName);
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
        }

        return $fileName;
    }

    public function uploadSound(UploadedFile $file)
    {
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move($this->getSoundDirectory(), $fileName);
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
        }

        return $fileName;
    }

    public function getAvatarDirectory()
    {
        return $this->avatarDirectory;
    }

    public function getSoundDirectory()
    {
        return $this->soundDirectory;
    }

    /**
     *
     * @param UploadedFile|null $avatar on autorise le null si jamais aucune avatar n'a été fournie
     * @return string|null
     */
    function moveAvatar(?UploadedFile $avatar, string $targetFolder, $prefix = ''): ?string
    {
        $newFilename = null;

        if ($avatar !== null) {
            // on a décidé d'appeler notre fichier
            $newFilename = $prefix . uniqid() . '.' . $avatar->guessExtension();

            // Move the file to the directory where brochures are stored
            $avatar->move(
                $targetFolder,
                $newFilename
            );
        }
        return $newFilename;
    }

    function moveUserAvatar(?UploadedFile $avatar, User $user)
    {
        $avatarFile = $this->moveAvatar($avatar, $this->avatarDirectory, 'user-');
        if ($avatarFile !== null) {
            $user->setAvatar($avatarFile);
        }
    }
}