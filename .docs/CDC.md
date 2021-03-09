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
- Créer un compte
- Enregistrer un son
- Publier un son
- Ecouter un son
- Commenter un son
- Clôturer une demande
- Gestion de rôles
- Signalements
- Ajouter en favori
- Mettre un like
- Créer un backoffice pour gérer le contenu et les utilisteurs
- Trier les posts par catégories
- Mail de confirmation à l'inscription

## Idées fonctionnalités supplémentaires

- Page de profil pour chaque utilisateur
- Page de réinitialisation du mot de passe
- Intégration d'un mode nuit
- Contraintes d'utilisation avant accès à toutes les fonctionnalités
- Classer les meilleurs contributeurs de la communauté
- Intégrer des blind tests pour la communauté

# Technologies prévues
- Symfony (BACK)
- React (FRONT)

# Cible

Le site est orienté pour le grand public, pour les utilisateurs de 7 ans et plus

# Navigateurs disponibles

Autant que possible

# Documents références

Arborescence du site : https://whimsical.com/architecture-kroon-XZgZaDQUP8wLJYFJSUU1hi

Wireframes du site : https://whimsical.com/kroon-6bguRPwKo51w9FqHR4YPGZ

MCD : Schema + Requête MOCODO dans le dossier ./MCD

# Liste des routes - FRONT

## Main

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /                                  | GET    | Accueil         |                   | -                          |
| /                                  | POST   | Publier post    |                   | -                          |
| /contact                           | GET    | Contact         |                   | -                          |
| /contact                           | POST   | Formulaire      |                   | -                          |
| /cgu                               | GET    | CGU             |                   | -                          |

## Authentification

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /inscription                       | GET    | Inscription     |                   | -                          |
| /inscription                       | POST   | Fomulaire       |                   | -                          |
| /connexion                         | GET    | Connexion       |                   | -                          |
| /connexion                         | POST   | Formulaire      |                   | -                          |
| /deconnexion                       | POST   | Formulaire      |                   | -                          |

## Users

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /compte                            | GET    | Compte          |                   | -                          |
| /compte                            | PUT    | Mise à jour     |                   | -                          |
| /compte/{slug}/favoris             | GET    | Liste favoris   |                   | -                          |
| /compte/{slug}/favoris             | DELETE | Annuler favori  |                   | -                          |
| /compte/{slug}/commentaires        | GET    | Liste comments  |                   | -                          |
| /compte/{slug}/publications        | GET    | Liste posts     |                   | -                          |

## Posts

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /publications                      | GET    | Liste posts     |                   | -                          |
| /publications/{slug}               | GET    | Affiche post    |                   | -                          |
| /publications/{slug}               | PUT    | Mise à jour     |                   | -                          |
| /publications/{slug}               | DELETE | Supprimer post  |                   | -                          |
| /publications/{slug}               | PUT    | Report post     |                   | -                          |
| /publications/{slug}               | PUT    | Chgt status     |                   | -                          |
| /publications/{slug}               | PUT    | Chgt isActive   |                   | -                          |

## Comments

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /publis/{slug}/comment             | POST   | Publier comment |                   | -                          |
| /publis/{slug}/comment/{id}/update | PUT    | Mise à jour     |                   | -                          |
| /publis/{slug}/comment             | DELETE | Supprimercomment|                   | -                          |
| /publis/{slug}/comment             | PUT    | Report comment  |                   | -                          |
| /publis/{slug}/comment             | PUT    | Chgt isActive   |                   | -                          |

## Tags

| route                              | method | description     | controller        | nom                        |
| ------------------                 | ------ | --------------- | -----------       | -------------------        |
| /categories                        | GET    | Liste tags      |                   | -                          |
| /categories/{name}/publications    | GET    | Posts / Tag     |                   | -                          |

## Fonctionnalités futures

| route                              | method | description     | controller         | nom                        |
| ------------------                 | ------ | --------------- | -----------        | -------------------        |
| /classement                        | GET    | Classement      | -                  | -                          |
| /blindtest                         | GET    | Blindtest       | -                  | -                          |

# Liste des routes - API

## Admin

| route      | method | description | controller      | nom       |
| ---------- | ------ | ----------- | --------------- | --------- |
| /api/login | POST   | Connexion   | Api Security    | api_login |
| /api/admin | GET    | Accueil     | Admin Dashboard | admin     |

## Authentification

| route            | method | description | controller   | nom             |
| ---------------- | ------ | ----------- | ------------ | --------------- |
| /api/login_check | POST   | Connexion   | Api Security | api_login_check |
| /api/logout      | POST   | Deconnexion | Api Security | api_logout      |

## Contact

| route        | method | description | controller  | nom         |
| ------------ | ------ | ----------- | ----------- | ----------- |
| /api/contact | POST   | Formulaire  | Api Contact | api_contact |

## Entité : User

| route                        | method | description    | controller | nom                         |
| ---------------------------- | ------ | -------------- | ---------- | --------------------------- |
| /api/v1/users/               | GET    | Liste users    | Api User   | api_v1_user_browse          |
| /api/v1/users/{id}           | GET    | Détail user    | Api User   | api_v1_user_read            |
| /api/v1/users/register       | POST   | Inscription    | Api User   | api_v1_user_register        |
| /api/v1/users/{id}           | POST   | Mise à jour    | Api User   | api_v1_user_edit            |
| /api/v1/users/{id}/bookmarks | GET    | Liste favoris  | Api User   | api_v1_user_bookmark_browse |
| /api/v1/users/{id}/comments  | GET    | Liste comments | Api User   | api_v1_user_comment_browse  |
| /api/v1/users/{id}/posts     | GET    | Liste posts    | Api User   | api_v1_user_post_browse     |

## Entité : Post

| route                       | method | description       | controller | nom                         |
| --------------------------- | ------ | ----------------- | ---------- | --------------------------- |
| /api/v1/posts/              | GET    | Liste posts       | Api Post   | api_v1_post_browse          |
| /api/v1/posts/{id}          | GET    | Détail post       | Api Post   | api_v1_post_read            |
| /api/v1/posts/lasts         | GET    | Liste 5 derniers  | Api Post   | api_v1_post_lasts           |
| /api/v1/posts/              | POST   | Ajout post        | Api Post   | api_v1_post_add             |
| /api/v1/posts/{id}          | PUT    | Mise à jour       | Api Post   | api_v1_post_edit            |
| /api/v1/posts/{id}          | DELETE | Supprimer         | Api Post   | api_v1_post_delete          |
| /api/v1/posts/report        | PUT    | Signaler          | Api Post   | api_v1_post_report          |
| /api/v1/posts/{id}/bookmark | POST   | Ajouter favori    | Api Post   | api_v1_post_add_bookmark    |
| /api/v1/posts/{id}/bookmark | DELETE | Supprimer favori  | Api Post   | api_v1_post_delete_bookmark |
| /api/v1/posts/{id}/comment  | POST   | Ajout commentaire | Api Post   | api_v1_post_add_comment     |

## Entité : Comment

| route                        | method | description      | controller  | nom                        |
| ---------------------------- | ------ | ---------------- | ----------- | -------------------------- |
| /api/v1/comments/            | GET    | Liste comments   | Api Comment | api_v1_comment_browse      |
| /api/v1/comments/{id}        | GET    | Détail comment   | Api Comment | api_v1_comment_read        |
| /api/v1/comments/liked       | GET    | Les plus likés   | Api Comment | api_v1_comment_liked       |
| /api/v1/comments/lasts       | GET    | Liste 5 derniers | Api Comment | api_v1_comment_lasts       |
| /api/v1/comments/{id}        | PUT    | Modifier         | Api Comment | api_v1_comment_edit        |
| /api/v1/comments/{id}        | DELETE | Supprimer        | Api Comment | api_v1_comment_delete      |
| /api/v1/comments/{id}/report | PUT    | Signaler         | Api Comment | api_v1_comment_report      |
| /api/v1/comments/{id}/like   | PUT    | Ajouter like     | Api Comment | api_v1_comment_add_like    |
| /api/v1/comments/{id}/unlike | PUT    | Supprimer like   | Api Comment | api_v1_comment_delete_like |

## Entité : Tag

| route                   | method | description  | controller | nom                   |
| ----------------------- | ------ | ------------ | ---------- | --------------------- |
| /api/v1/tags            | GET    | Liste tags   | Api Tag    | api_v1_tag_browse     |
| /api/v1/tags/{id}       | GET    | Détail tag   | Api Tag    | api_v1_tag_read       |
| /api/v1/tags/{id}/posts | GET    | Posts / tag  | Api Tag    | api_v1_tag_read_posts |
| /api/v1/tags            | POST   | Ajout tag    | Api Tag    | api_v1_tag_add        |
| /api/v1/tags/{id}       | PUT    | Modifier tag | Api Tag    | api_v1_tag_edit       |


# User stories

## Visiteur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Visiteur | créer un compte | - |
| Visiteur | me connecter | - |
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
| Utilisateur | écouter les posts publiés | - |
| Utilisateur | lire les commentaires | - |
| Utilisateur | proposer un post | - |
| Utilisateur | commenter un post | - |
| Utilisateur | modifier mon post | - |
| Utilisateur | mettre un post en favori | - |
| Utilisateur | mettre un like sur un commentaire | - |
| Utilisateur | signaler un post | - |
| Utilisateur | signaler un commentaire | - | 
|--|--|--|

## Modérateur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Modérateur | désactiver un post | - |
| Modérateur | désactiver un commentaire | - |
| Modérateur | gérer les utilisateurs | activer ou désactiver un compte |
|--|--|--|

## Administrateur

| En tant que | Je veux pouvoir | Afin de (si besoin/nécessaire) |
|--|--|--|
| Administrateur | désactiver un post | - |
| Administrateur | désactiver un commentaire | - |
| Administrateur | gérer les rôles | attribuer ou retirer un rôle |
| Administrateur | gérer les utilisateurs| activer ou désactiver un compte |
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
id|Id de l'utilisateur|INT (AI)|-|Users|
role|Rôle de l'utilisateur|VARCHAR|-|Users|
name|Pseudo de l'utilisateur|VARCHAR|-|Users|
slug|Slug de l'utilisateur|VARCHAR|-|Users|
email|Adresse mail de l'utilisateur|VARCHAR|-|Users|
password|Mot de passe de l'utilisateur|VARCHAR|-|Users|
bio|Slug de l'utilisateur|VARCHAR|-|Users|
avatar|Avatar de l'utilisateur|VARCHAR|-|Users|
isActive|Statut de l'utilisateur|BOOL|-|Users|
createdAt|Date de création|DATETIME|-|Users|
updatedAt|Date de mise à jour|DATETIME|-|Users|
-|-|-|-|-|

# Posts

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|Id du post|INT (AI)|-|Posts|
user_id|Id de l'utilisateur qui créé le post |INT|-|Users|
tag_id|Id de la catégorie du post|INT|-|Categories|
title|Titre du post|VARCHAR|-|Posts|
sound|Enregistrement du son de l'utilisateur|VARCHAR|-|Posts|
body|Description du post|TEXT|Servira pour la recherche|Posts|
isClosed|Fermeture du post|BOOL|-|Posts|
isSolved|Résolution du post|BOOL|-|Posts|
isReported|Signalement du post|BOOL|-|Posts|
isActive|Archivage du post|BOOL|-|Posts|
createdAt|Date de création|DATETIME|-|Posts|
updatedAt|Date de mise à jour|DATETIME|-|Posts|
-|-|-|-|-|

# Comments

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|Id du commentaire|INT (AI)|-|Comments|
user_id|Id de l'utilisateur|INT|-|Users|
post_id|Id du post|INT|-|Posts|
body|Commentaire de l'utilisateur|TEXT|-|Comments|
likes|Vote de l'utilisateur|INT|-|Comments|
isReported|Signalement du commentaire|BOOL|-|Comments|
isActive|Commentaire approuvé ou non|BOOL|-|Comments|
createdAt|Date de création|DATETIME|-|Comments|
updatedAt|Date de mise à jour|DATETIME|-|Comments|
-|-|-|-|-|

# Tags

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
id|Id de la catégorie|INT (AI)|-|Categories|
name|Nom de la catégorie|VARCHAR|-|Categories|
createdAt|Date de création|DATETIME|-|Categories|
updatedAt|Date de mise à jour|DATETIME|-|Categories|
-|-|-|-|-|

# User_Post ( Table pivot - Favoris)

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
user_id|id de l'utilisateur|INT|-|Users|
post_id|id du post|INT|-|Posts|
-|-|-|-|-|

# User_Comment ( Table pivot - Like )

Nom|Description|Type|Commentaire|Entité|
-|-|-|-|-|
user_id|id de l'utilisateur|INT|-|Users|
comment_id|id du post|INT|-|Comments|
-|-|-|-|-|
