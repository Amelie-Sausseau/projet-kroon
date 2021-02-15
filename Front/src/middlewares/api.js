import axios from 'axios';

import { FETCH_POSTS, savePosts } from 'src/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      axios.get('http://ec2-54-174-21-167.compute-1.amazonaws.com/api/v1/posts/')
        .then((response) => {
          console.log(response);
          store.dispatch(savePosts(response));
        }).catch((error) => {
          console.error('error');
        });
        
      next(action);
      break;
      /* case FETCH_FAVORITES: {
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
