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



### idées fonctionnalités supplémentaires :
- contraintes de son à écouter/répondre pour poster
- blind test
- classement des meilleurs helpeurs (badge...)

### Technologies prévues
- Symfony (BACK) / peut-être NodeJS
- React (FRONT)

# Cible
 - 7 à 99 ans (grand public)

# Navigateurs disponibles
- Autant que possible

# L'arborescence de l'application
https://www.gloomaps.com/ofQ4YqnlT9

# Liste des routes
www.kroon.fr/signup,
www.kroon.fr/login,
www.kroon.fr/home,
www.kroon.fr/listen,
www.kroon.fr/myAccount,
www.kroon.fr/blindtest,
www.kroon.fr/leaderboard

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



réponses : majoritairement écrite + possible d'ajouter PJ/lien YT...
sans compte : accès en lecture audio des sons + lecture visuelle des commentaires, pas d'ajout ni de réponse soi-même sans être logger.