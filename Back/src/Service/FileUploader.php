<?php

namespace App\Service;

use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploader
{
    private $userAvatar;
    private $userSound;

    public function __construct($userAvatar, $userSound)
    {
        $this->userAvatar= $userAvatar;
        $this->userSound = $userSound;
    }

    /**
     * Et la j'ai la meme fonctionnalité dédiée à un cas particulier
     *
     * @param UploadedFile|null $avatar on autorise le null si jamais aucun avatar n'a été fourni
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

    function moveSound(?UploadedFile $sound, string $targetFolder, $prefix = ''): ?string
    {
        $newFilename = null;

        if ($sound !== null) {
            $newFilename = $prefix . uniqid() . '.' . $sound->guessExtension();

            $sound->move(
                $targetFolder,
                $newFilename
            );
        }
        return $newFilename;
    }

    function moveUserAvatar(?UploadedFile $avatar, User $user)
    {
        $avatarName = $this->moveAvatar($avatar, $this->userAvatar, 'user-');
        if ($avatarName !== null) {
            $user->setAvatar($avatarName);
        }
    }

    function moveUserSound(?UploadedFile $sound, Post $post)
    {
        $soundName = $this->moveSound($sound, $this->userSound, 'post-');
        if ($soundName !== null) {
            $post->setSound($soundName);
        }
    }
}