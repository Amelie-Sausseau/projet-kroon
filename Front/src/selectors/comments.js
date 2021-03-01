/* eslint-disable import/prefer-default-export */

// on définit un selecteur qui permet de déterminer
// le plus grand identifiant existant pour message
export const getHighestCommentId = (state) => {
  // on récupère la propriété messages de state dans une constante messages
  const { comments } = state;

  if (comments.length > 0) {
    // on récupère un tableau contenant seulement les ids des messages
    const ids = comments.map((comment) => comment.id);
    // on passe l'ensemble des ids à Math.max (ouverture du tableau ids)
    return Math.max(...ids);
  }

  return 0;
};
