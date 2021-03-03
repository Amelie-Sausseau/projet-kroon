<?php

namespace App\Repository;

use App\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comment::class);
    }

    public function commentsMostLiked()
    {
        $queryBuilder = $this->createQueryBuilder('comment');
        $queryBuilder->addOrderBy('comment.likes', 'DESC');
        $queryBuilder->where('comment.isActive = 1');
        $queryBuilder->setMaxResults(5);
        $query = $queryBuilder->getQuery();

        return $query->getResult();        
    }


    public function findLastsFiveComments()
    {
        $queryBuilder = $this->createQueryBuilder('comment');
        $queryBuilder->where('comment.isActive = 1');
        $queryBuilder->addOrderBy('comment.createdAt', 'DESC');
        $queryBuilder->setMaxResults(5);
        $query = $queryBuilder->getQuery();

        return $query->getResult();        
    }


    // /**
    //  * @return Comment[] Returns an array of Comment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Comment
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
