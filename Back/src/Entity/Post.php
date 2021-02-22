<?php

namespace App\Entity;

use DateTime;
use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $sound;

    /**
     * @ORM\Column(type="text")
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $body;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $isClosed;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $isSolved;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $isReported;

    /**
     * @ORM\Column(type="boolean", options={"default":true})
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime", options={"default": "CURRENT_TIMESTAMP"})
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     * @Groups({"tag:allPosts"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, inversedBy="posts")
     * @Groups({"user:one"})
     * @Groups({"post:all", "post:one"})
     * @Groups({"comment:one"})
     */
    private $tags;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="posts")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"post:all", "post:one"})
     * @Groups({"tag:allPosts"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="post")
     * @Groups({"post:one"})
     */
    private $comments;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->isActive = new Boolean();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSound(): ?string
    {
        return $this->sound;
    }

    public function setSound(string $sound): self
    {
        $this->sound = $sound;

        return $this;
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

    public function getIsClosed(): ?bool
    {
        return $this->isClosed;
    }

    public function setIsClosed(?bool $isClosed): self
    {
        $this->isClosed = $isClosed;

        return $this;
    }

    public function getIsSolved(): ?bool
    {
        return $this->isSolved;
    }

    public function setIsSolved(?bool $isSolved): self
    {
        $this->isSolved = $isSolved;

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

    /**
    * @ORM\PrePersist
    * @ORM\PreUpdate
    */
    public function updatedTimestamps(): void
    {
    $this->setUpdatedAt(new \DateTime('now'));
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new DateTime('now'));
        }
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

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

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPost($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getPost() === $this) {
                $comment->setPost(null);
            }
        }

        return $this;
    }
}
