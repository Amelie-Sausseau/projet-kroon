import axios from 'axios';

import { FETCH_POSTS, savePosts } from 'src/actions';

import { url } from 'src/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      axios.get(`${url}/api/v1/posts/`)
        .then((response) => {
          /*           console.log(response.data);
 */ store.dispatch(savePosts(response.data));
        }).catch((error) => {
          console.error('error');
        });

      next(action);
      break;
      /* case FETCH_POSTS_USER_LOGIN: {
        const { token } = store.getState().user;

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
      } */
    default:
      next(action);
  }
};
