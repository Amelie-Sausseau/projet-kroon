import axios from 'axios';

import { saveRecipes, saveFavorites, FETCH_RECIPES, FETCH_FAVORITES } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        }).catch((error) => {
          // TODO
        }).finally((response) => {
          // TODO
        });
      next(action);
      break;
    case FETCH_FAVORITES: {
      const { token } = store.getState().user;

      // pour accéder aux routes protégées par jwt,
      // il nous faut ajouter à al requête un header
      // authorization avec pour valeur 'Bearer valeur_de_mon_token'
      // ce token sera intercepté sur le serveur par le middleware back
      // authorizationMiddleware.
      axios.post('http://localhost:3001/favorites', {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(saveFavorites(response.data.favorites));
          console.log(response.data);
        }).catch((error) => {
          // TODO
          console.log('error');
        }).finally((response) => {
          // TODO
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
