import axios from 'axios';

import { url } from 'src/utils';
import {
  ADD_COMMENTS_TO_DB,
  SET_LIKES,
  FETCH_LASTS_COMMENTS,
  saveLastsComments,
  clearInputComment,
} from '../actions/comments';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENTS_TO_DB:
      // eslint-disable-next-line no-case-declarations
      const { body } = store.getState().comments;
      const { token } = store.getState().users;
      console.log(action.postId);
      const id = action.postId;

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
        store.dispatch(clearInputComment());
      }).catch((error) => {
        console.log(error);
      });
      // on laisse continuer l'action sur la route vers le reducer.
      // cette action sera traitée et permettra de RAZ le champ de saisie.
      next(action);
      break;
    case SET_LIKES:
      const { likes } = action.likes;
      console.log(likes);
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
    case FETCH_LASTS_COMMENTS:
      axios.get(`${url}/api/v1/comments/lasts`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveLastsComments(response.data));
        }).catch((error) => {
          console.error('error');
        });
      next(action);
      break;

    default:
      next(action);
  }
};
