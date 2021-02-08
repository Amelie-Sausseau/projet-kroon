# projet-kroon

Kroon - L'application d'échanges vocaux entre personnes afin de retrouver un son, une musique, un sample grâce à la communauté et l'intelligence collective.

# Besoins & Objectifs

La définition des besoins (problèmes auxquels répond le projet) et des objectifs (solutions qu'apporte le projet) du projet

- Problèmes :
    - Manque d'informations sur un son (musique, film, générique, réplique, vidéo, voix, cris d'animaux, ...)

- Objectifs : 
    - Retrouver le son concerné grâce aux commentaires des utilisateurs de l'application

# Fonctionnalités 

## MVP (Minimum Viable Product)
- Déposer un son
- Ecouter un son
- Commenter un son
- Clôturer une demande
- Gestion de rôles

## Idées fonctionnalités supplémentaires
- Contraintes minimum d'utilisation avant accès à toutes les fonctionnalités
- Intégrer des blind tests pour la communauté
- Classer les meilleurs contributeurs de la communauté
- Créer un backoffice pour gérer le contenu et les utilisteurs

# Technologies prévues
- Symfony (BACK) => peut-être NodeJS
- React (FRONT)

# Cible

Le site est orienté pour le grand public, pour les utilisateurs de 7 ans et plus

# Navigateurs disponibles

Autant que possible

# Documents références

Arborescence du site : https://www.gloomaps.com/ofQ4YqnlT9

MCD : Schema + Requête MOCODO dans le dossier ./MCD

# Liste des routes

| route                        | method | description     | controller     | nom                        |
| ------------------           | ------ | --------------- | -----------    | -------------------        |     
| /signup                      | GET    | Inscription     | -              | -                          | 
| /login                       | GET    | Connexion       | -              | -                          | 
| /home                        | GET    | Accueil         | -              | -                          | 
| /contact                     | GET    | Contact         | -              | -                          | 
| /account                     | GET    | Compte          | -              | -                          | 
| /cgu                         | GET    | CGU             | -              | -                          | 
| /listen                      | ???    | Enregistrement  | -              | -                          |

| route                        | method | description     | controller     | nom                        |
| ------------------           | ------ | --------------- | -----------    | -------------------        |  
| /leaderboard                 | GET    | Classement      | -              | -                          | 
| /blindtest                   | GET    | Blindtest       | -              | -                          | 

# User stories

## Visiteur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Visiteur | créer un compte | - |
| Visiteur | me connecter | - |
| Visiteur | réinitialiser mon mot de passe | - |
| Visiteur | écouter les sons publiés | - |
| Visiteur | lire les commentaires | - |
|--|--|--|

## Utilisateur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Utilisateur | me déconnecter | - |
| Utilisateur | accéder à mon compte | modifier mes coordonnées |
| Utilisateur | - | lister mes favoris |
| Utilisateur | - | lister mes sons postés |
| Utilisateur | - | lister mes sons commentés |
| Utilisateur | écouter les sons publiés | - |
| Utilisateur | lire les commentaires | - |
| Utilisateur | proposer un son | - |
| Utilisateur | commenter un son | - |
| Utilisateur | mettre un son en favori | - |
| Utilisateur | signaler un compte | - | 
|--|--|--|

## Modérateur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Modérateur | supprimer un post | - |
| Modérateur | supprimer un commentaire | - |
| Modérateur | gérer les utilisateurs | - |
|--|--|--|

## Administrateur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Administrateur | supprimer un post | - |
| Administrateur | supprimer un commentaire | - |
| Administrateur | gérer les rôles | attribuer ou retirer un rôle |
| Administrateur | gérer les utilisateurs| - |
|--|--|--|

# Rôles

>## Product Owner : Jordan

- Connaît le produit et représente les intérêts et les besoins du client/des utilisateurs purement fonctionnels (pas techniques)
- Tranche en cas de conflits fonctionnels (pas techniques)

>## Scrum master : Damien

- Garant de la méthode du projet : il gère le respect des conventions définies dans le groupe
- S'assure que toutes les tâches sont bien attribuées, suivies, accomplies
- Assure la communication au sein du groupe : il vérifie que tout le monde a les bonnes informations
- Anime la réunion du matin et gère l'avancement du projet
- Gère l'outil de suivi du projet

>## Lead Dev - Front : Dimitri
>## Lead Dev - Back : Amélie
- Choisit les orientations importantes, choix techniques importants
- S'assure du bon fonctionnement de sa partie du projet

>## Git master : Damien
- Garant du bon fonctionnement du versionning avec Git.
- Responsable du bon fonctionnement du versionning, vérifie les PR et merge, gère les conflits etc.

# Documents relatifs à la BDD

## Dictionnaire de données

A partir des infos disponibles (maquettes, cahier des charges, descriptions fonctionnelles), nous avons **listé toutes les informations nécessaires au fonctionnement** de l'application dans un _dictionnaire de données_, selon cette méthode :

- **Tous les informations sont coupées par entité**
- **Chaque champ dans ces entités est indiqué avec son type** (int, text, boolean, etc.)

> Certaines informations ne seront pas rattachées qu'à une seule entité et seront donc liées à d'autres entités par l'intermédiaire de clés étrangères et d'une table pivot

## Users

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|id de l'utilisateur|TINYINT|-|Users|
role_id|Rôle de l'utilisateur|TINYINT|-|Roles|
name|Pseudo de l'utilisateur|VARCHAR|-|Users|
email|Adresse mail de l'utilisateur|VARCHAR|-|Users|
password|Mot de passe de l'utilisateur|VARCHAR|-|Users|
avatar|Avatar de l'utilisateur|VARCHAR|-|Users|
isActive|Statut de l'utilisateur|BOOL|-|Users|
created at|Date de création|DATETIME|-|Users|
updated at|Date de mise à jour|DATETIME|-|Users|
-|-|-|-|-|
> Mémo : Nb. de commentaires et de sons postés

> Mémo 2 : Gestion du "isActive" avec un seul "status"

# Posts

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|Id du post|INT|-|Posts|
user_id|Id de l'utilisateur qui créé le post |INT|-|Users|
category_id|Id de la catégorie du post|INT|-|Categories|
title|Titre du post|VARCHAR|-|Posts|
sound|Enregistrement du son de l'utilisateur|VARCHAR|-|Posts|
body|Description du post|TEXT|Servira pour la recherche|Posts|
isClosed|Fermeture du post|BOOL|-|Posts|
isBlocked|Blocage du post|BOOL|-|Posts|
isSolved|Résolution du post|BOOL|-|Posts|
isActive|Archivage du post|BOOL|-|Posts|
created at|Date de création|DATETIME|-|Posts|
updated at|Date de mise à jour|DATETIME|-|Posts|
-|-|-|-|-|
> Mémo : Gestion des "isXXX" avec un seul "status"

# Comments

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|Id du commentaire|INT (AI)|-|Comments|
user_id|Id de l'utilisateur|INT|-|Users|
post_id|Id du post|INT|-|Posts|
body|Commentaire de l'utilisateur|TEXT|-|Comments|
likes|Vote de l'utilisateur|INT|-|Comments|
isValidated|Commentaire approuvé ou non|BOOLEAN|-|Comments|
createdAt|Date de création|DATETIME|-|Comments|
updatedAt|Date de mise à jour|DATETIME|-|Comments|
-|-|-|-|-|

# Tags

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|id de la catégorie|INT (AI)|-|Categories|
name|Nom de la catégorie|VARCHAR|-|Categories|
createdAt|Date de création|DATETIME|-|Categories|
updatedAt|Date de mise à jour|DATETIME|-|Categories|
-|-|-|-|-|

# Roles

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|id du rôle|INT (AI)|-|Roles|
name|Nom du rôle|VARCHAR|-|Roles|
role_string|Nom du rôle|VARCHAR|-|Roles|
createdAt|Date de création|DATETIME|-|Roles|
updatedAt|Date de mise à jour|DATETIME|-|Roles|
-|-|-|-|-|

# User_Post_Fav

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
user_id|id de l'utilisateur|INT|-|Users|
post_id|id du post|INT|-|Posts|
-|-|-|-|-|
