import axios from 'axios';

import { LOG_IN, saveUserData } from 'src/actions/user';
import { fetchFavorites } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().users;

      axios.post(
        'http://localhost:3001/login',
        {
          email,
          password,
        },
      ).then((response) => {
        // on dispatche l'action de sauvegarde des infos utilisateur
        store.dispatch(saveUserData(response.data));

        // on pourrait fixer une valeur par défaut
        // pour le header authorization de toutes nos futures
        // requêtes axios. Est-ce une bonne idée si plusieurs
        // api différentes étaient utilisées (à priori, pas vraiment...)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        // au moment ou on se loggue, on va récupérer nos favoris
        // store.dispatch(fetchFavorites());
      }).catch((error) => {
        console.log('error');
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
