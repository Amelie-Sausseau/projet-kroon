import axios from 'axios';

import { LOG_IN, saveUserData, SIGN_UP, FETCH_DATA_FROM_LS, saveUserDataSignUp  } from 'src/actions/users';
/* import { fetchFavorites } from 'src/actions/recipes';
 */import { url } from 'src/utils';
import React from 'react';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().users;
      axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/login_check',
        {
          username,
          password,
        }).then((response) => {
        /* window.location = '/poster' */

        // on dispatche l'action de sauvegarde des infos utilisateur
        store.dispatch(saveUserData(response.data));
        localStorage.setItem('userData',JSON.stringify( response.data));
        store.getState().users.islogged = true;
      }).catch((error) => {
        console.log('error');
      });
      next(action);
      break;
    }
  
    case FETCH_DATA_FROM_LS: {
      const userData = localStorage.getItem('userData');
      console.log(JSON.parse(userData))
      if (userData) {
        store.dispatch(saveUserData(JSON.parse(userData)));
      }
      next(action);
      break;
    }
    case SIGN_UP: {
      const { email, password, name } = store.getState().users;

      axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/users/register',
        {
          name,
          password,
          email,
        }).then((response) => {

        store.dispatch(saveUserDataSignUp(response.data));

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
