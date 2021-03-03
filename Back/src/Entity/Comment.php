<?php

namespace App\Entity;

use DateTime;
use phpDocumentor\Reflection\Types\Boolean;
use App\Repository\CommentRepository;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $body;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $likes;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $isReported;

    /**
     * @ORM\Column(type="boolean", options={"default":true})
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime", options={"default": "CURRENT_TIMESTAMP"})
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"user:one", "user:commentedPosts"})
     * @Groups({"post:one"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"post:one"})
     * @Groups({"user:commentedPosts"})
     * @Groups({"comment:all", "comment:one"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Post::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user:commentedPosts"})
     * @Groups({"comment:one"})
     */
    private $post;

    public function __construct()
    {
        $this->createdAt = new DateTime();
        $this->isActive = new Boolean();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getLikes(): ?int
    {
        return $this->likes;
    }

    public function setLikes(?int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getIsReported(): ?bool
    {
        return $this->isReported;
    }

    public function setIsReported(?bool $isReported): self
    {
        $this->isReported = $isReported;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

        return $this;
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
}

