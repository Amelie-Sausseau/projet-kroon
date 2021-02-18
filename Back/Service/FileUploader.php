<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    private $userFolder;

    public function __construct($userFolder)
    {
        $this->userFolder = $userFolder;
    }

    /**
     *
     * @param UploadedFile|null $image on autorise le null si jamais aucune image n'a été fournie
     * @return string|null
     */
    public function moveImage(?UploadedFile $image, string $targetFolder, $prefix = ''): ?string
    {
        $newFilename = null;

        if ($image !== null) {
            // on a décidé d'appeler notre fichier
            $newFilename = $prefix . uniqid() . '.' . $image->guessExtension();

            // Move the file to the directory where brochures are stored
            $image->move(
                $targetFolder,
                $newFilename
            );
        }
        return $newFilename;
    }
    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    public function moveUserImage(?UploadedFile $image, User $user)
    {
        $imageName = $this->moveImage($image, $this->userFolder, 'user-');
        if ($imageName !== null) {
            $user->setAvatar($imageName);
        }
    }
}