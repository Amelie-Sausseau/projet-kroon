import axios from 'axios';

import {
  saveComments, FETCH_COMMENTS, SEND_COMMENTS_TO_SERVER, ADD_COMMENTS_TO_DB,
} from '../actions/comments';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      axios.get('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/4')
        .then((response) => {
          console.log('je passe par then');
          console.log(response);
          store.dispatch(saveComments(response.data));
        }).catch((error) => {
          // TODO
        }).finally((response) => {
          // TODO
        });
      next(action);
      break;
    case SEND_COMMENTS_TO_SERVER:
      axios.get('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/4')
        .then((response) => {
          console.log('then', response);
        }).catch((error) => {
          // TODO
        }).finally((response) => {
          // TODO
        });
      next(action);
      break;
    case ADD_COMMENTS_TO_DB:
      // eslint-disable-next-line no-case-declarations
      const { id, body } = store.getState().comments;
      const { token } = store.getState().users;
      console.log(id);

      console.log('je passe par le middleware comments', id);

      axios.post(`http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/${id}/comment`,
        {
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log(error);
      });
      // on laisse continuer l'action sur la route vers le reducer.
      // cette action sera traitée et permettra de RAZ le champ de saisie.
      next(action);
      break;

    default:
      next(action);
  }
};
