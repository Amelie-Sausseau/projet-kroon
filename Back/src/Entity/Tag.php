<?php

namespace App\Entity;

use App\Repository\TagRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TagRepository::class)
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:all", "tag:one", "tag:allPosts"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:all", "tag:one", "tag:allPosts"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime", options={"default": "CURRENT_TIMESTAMP"})
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:all", "tag:one", "tag:allPosts"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:all", "tag:one", "tag:allPosts"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=Post::class, mappedBy="tags")
     * @Groups({"tag:allPosts"})
     */
    private $posts;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->createdAt = new DateTime();
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
    * @ORM\PrePersist
    * @ORM\PreUpdate
    */
    public function updatedTimestamps(): void
    {
    $this->setUpdatedAt(new \DateTime('now'));
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTime('now'));
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Post[]
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->addTag($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->removeElement($post)) {
            $post->removeTag($this);
        }

        return $this;
    }

    
}
