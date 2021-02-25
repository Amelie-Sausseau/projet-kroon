
  export const getPostsBySlug = ({ mic: { data } }, slug) => {
    // la décomposition multi niveau directement dans les params
    // équivaut à avoir state en param
    // et à faire :
    // const { recipes } = state.recipe;
    // on veut trouver la recette qui a ce slug
    console.log(data)
    return data.find((data) => slug == data.id);
  };
  
  
  /* export const getTitleByRecipesNumber = (numberOfRecipes) => {
    if (numberOfRecipes === 0) {
      return 'Aucune recette pour le moment';
    } if (numberOfRecipes === 1) {
      return 'Une seule recette pour le moment';
    }
  
    return `Découvrez nos ${numberOfRecipes} recettes !`;
  }; */
  
  // une recette fait partie de nos favoris si son id est présent dans la liste
  // on utilise la fonction indexOf qui permet de trouver l'index d'un élément
  // dans un tableau s'il est présent, -1 sinon.
 /*  export const isFavorite = (favorites, idToVerify) => {
    console.log(favorites);
    return (favorites.find((favorite) => favorite.id === idToVerify) !== undefined);
  }; */