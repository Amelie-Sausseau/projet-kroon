# projet-kroon

Kroon - L'application d'échanges vocaux entre personnes afin de retrouver un son, une musique, un sample grâce à la communauté et l'intelligence collective.

# Besoins & Objectifs

La définition des besoins (problèmes auxquels répond le projet) et des objectifs (solutions qu'apporte le projet) du projet

- Problèmes :
    - Manque d'informations sur un son (musique, film, générique, réplique, vidéo, voix, cris d'animaux, ...)

- Objectifs : 
    - Retrouver le son concerné grâce aux commentaires des utilisateurs de l'application

# Fonctionnalités 

### MVP - (Minimum Viable Product)
    - Déposer un son
    - Ecouter un son
    - Proposer une réponse au son recherché



# idées fonctionnalités supplémentaires :
- Contraintes de son à écouter/répondre pour poster
- Blind test
- Classement des meilleurs helpeurs (badge...)
- Clôturer sa demande 

# Technologies prévues
- Symfony (BACK) / peut-être NodeJS
- React (FRONT)

# Cible
 - 7 à 99 ans (grand public)

# Navigateurs disponibles
- Autant que possible

# L'arborescence de l'application
https://www.gloomaps.com/ofQ4YqnlT9

# Liste des routes
- www.kroon.fr/signup,
- www.kroon.fr/login,
- www.krron.fr/contact,
- www.kroon.fr/home,
- www.kroon.fr/listen,
- www.kroon.fr/myAccount,
- www.kroon.fr/blindtest,
- www.kroon.fr/leaderboard
- www.kroon.fr/CGU,

# User-stories
    - en tant que utilisateur non loggé
        - Je dois pouvoir me connecter
        - je dois pouvoir m'inscrire
        - faire mdp oublié
        - écouter des sons / lire les commentaires

    - en tant que utilisateur loggé
        - Je dois pouvoir me déconnecter 
        - écouter des sons / lire les commentaires
        - proposer un son
        - commenter un son
        - avoir accès à mes sons postés & leurs réponses
        - avoir accès aux réponses que j'ai proposé
        - Accéder à mon compte
            - changer mes infos personnelles (nom, email, mdp)
        (- avoir accès aux bllindtest
        - avoir accès aux leaderboards)

    - en tant qu'admin
      (- accéder au back office )
        - supprimer des commentaires
        - supprimer des sons 
        - paramétrés les comptes (gestion des rôles, suppression...)
       
    - en tant que modérateur
      (- accéder au back office )
        - supprimer des commentaires
        - supprimer des sons 
        - paramétrés les comptes (gestion des rôles, suppression...)

# rôles de chacun
1) Product Owner
Connaît le produit et représente les intérêts et les besoins du client/des utilisateurs purement fonctionnels (pas techniques)
Tranche en cas de conflits fonctionnels (pas techniques)
En général c'est le porteur du projet (s'il est dans le groupe)

2) Scrum master
Garant de la méthode du projet : il gère le respect des conventions définies dans le groupe
S'assure que toutes les tâches sont bien attribuées, suivies, accomplies
Assure la communication au sein du groupe : il vérifie que tout le monde a les bonnes informations
Gère l'outil de suivi du projet
Anime la réunion du matin et gère l'avancement du projet

3) Lead dev front & Lead dev back
Choisit les orientations importantes, choix techniques importants
S'assure du bon fonctionnement de sa partie du projet

Référents techniques

4) Git master
Garant du bon fonctionnement du versionning avec Git.
Responsable du bon fonctionnement du versionning, vérifie les PR et merge, gère les conflits etc.

5) Référent par librairie/techno particulière (exemples : Bootstrap, Google Maps... )
S'informe, se documente sur cette techno, sa sémantique, son utilisation.
Restitue les informations au groupe.
=> Fichier commun (google sheet à créer)

Amélie : Lead Back

Dimitri : Lead Front 

Damien : Scrum Master / Git Master

Jordan : PO

Idées :
réponses : majoritairement écrites + possible d'ajouter PJ/lien YT...
sans compte : accès en lecture audio des sons + lecture visuelle des commentaires, pas d'ajout ni de réponse soi-même sans être logger.

### Documents relatifs à la BDD
- Le MCD

# Dictionnaire de données

A partir des infos disponibles (maquettes, cahier des charges, descriptions fonctionnelles), nous avons **listé toutes les informations nécessaires au fonctionnement** de l'application dans un _dictionnaire de données_, selon cette méthode :

- **Nous avons nommé chaque information**
- **Le type** (nombre, texte, booléen, calculé à partir d'autres informations).

> Certaines informations ne seront pas rattachées qu'à une seule entité. Ces informations vont nous aider à construire les relations.

- Le dico de données

    # users
        - ID 
        - Nickname
        - mail
        - password
        - created at
        - updated at
        - ID role
        - isActive
        - avatar
        (- Nb de commentaires postés
        - Nb de sons postés)

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID|ID de l'utilisateur|TINYINT|-|Users|
    Nickname|Pseudo de l'utilisateur|VARCHAR|-|Users|
    Mail|Adresse mail de l'utilisateur|VARCHAR|-|Users|
    password|mot de passe de l'utilisateur|VARCHAR|-|Users|
    ID Rôle|Rôle de l'utilisateur|TINYINT|-|Roles|
    isActive|Statut de l'utilisateur|BOOL|-|Users|
    avatar|Avatar de l'utilisateur|VARCHAR|-|Users|
    created at|date de création|DATETIME|-|Users|
    updated at|date de mise à jour|DATETIME|-|Users|
        

    # Posts
        - ID
        - Title
        - ID category
        - ID User
        - Sounds
        - Text
        - created at
        - updated at
        - isClosed
        - isSolved        
        - isBlocked
        - isActive

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID|Id du post|INT|-|Posts|
    Title |Titre du post|VARCHAR|-|Posts|
    ID category|id de la catégorie du post|INT|-|Categories|
    ID User|id de l'utilisateur qui créé le post |INT|-|Users|
    Sounds|l'enregistrement du son de l'utilisateur|VARCHAR|-|Posts|
    Text|description du post ou info pour trouver l'origine du son|BLOB|-|Posts|
    created at|date de création|DATETIME|-|Posts|
    updated at|date de mise à jour|DATETIME|-|Posts|
    isClosed|post créé et archivé|BOOL|-|Posts|
    isBlocked|post bloqué pour contenu abusif|BOOL|-|Posts|
    isSolved|post bloqué pour contenu abusif|BOOL|-|Posts|
    isActive|post validé et non archivé|BOOL|-|Posts|


    # comments
        - ID
        - ID user
        - ID Post
        - Text
        - Likes/votes
        - created at
        - isValidated

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID|ID du commentaire|int (AI)|-|Comments|
    ID user|ID de l'utilisateur|int|-|Users|
    ID Post|ID du post|int|-|Posts|
    Text|Commentaire de l'utilisateur|text|-|Comments|
    Likes/votes|Vote de l'utilisateur|int|-|Comments|
    created at|Date de création|datetime|-|Comments|
    isValidated|Commentaire approuvé ou non|BOOL|-|Comments|


    # categories
        - ID
        - Title
        - created at
        - updated at

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID|ID de la catégorie|int (AI)|-|Categories|
    Title|Nom de la catégorie|varchar|-|Categories|
    created at|Date de création|datetime|-|Categories|
    updated at|Date de la màj|datetime|-|Categories|


    # roles
        - ID
        - Name
        - role_string
        - created at
        - updated at

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID|ID du rôle|int (AI)|-|Roles|
    Name|Nom du rôle|varchar|-|Roles|
    Role_string|Nom du rôle|varchar|-|Roles|
    created at|Date de création|datetime|-|Roles|
    updated at|Date de la màj|datetime|-|Roles|

    # users_fav
        - ID users
        - ID Posts

    Nom|Description|Type|Commentaire|Entité|
    -|-|-|-|-|
    ID users|ID de l'utilisateur|int (AI)|-|Users|
    ID Posts|ID du post|int (AI)|-|Posts|



