<?php

namespace App\Service;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
class FileUploader
{
    private $targetDirectory;
    private $slugger;

    public function __construct($targetDirectory, SluggerInterface $slugger)
    {
        $this->targetDirectory = $targetDirectory;
        $this->slugger = $slugger;
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
    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }
}