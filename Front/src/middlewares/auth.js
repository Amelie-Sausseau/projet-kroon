import axios from 'axios';

import { LOG_IN, saveUserData, SIGN_UP } from 'src/actions/users';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      console.log('salut');
      const { username, password } = store.getState().users;
      axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/login_check',
        {
          username,
          password,
        }).then((response) => {
        /* window.location = '/poster' */

        // on dispatche l'action de sauvegarde des infos utilisateur
        store.dispatch(saveUserData(response.data));
        console.log(response);

        store.getState().users.islogged = true;
      }).catch((error) => {
        console.log('error');
      });
      next(action);
      break;
    }
    case SIGN_UP: {
      const { email, password, name } = store.getState().users;
      console.log(email, password, name);

      axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/users/register',
        {

          name,
          password,
          email,
        }).then((response) => {
        // on dispatche l'action de sauvegarde des infos utilisateur
        console.log('then');
        store.dispatch(saveUserData(response.data));
        console.log(response);

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
