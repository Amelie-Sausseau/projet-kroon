import axios from 'axios';

import { saveComments, FETCH_COMMENTS } from '../actions/comments';

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

    default:
      next(action);
  }
};

// import axios from 'axios';
// import { url } from 'src/utils';
// import { SEND_COMMENTS_TO_SERVER } from '../actions/comments';

// const CommentsMiddleware = (store) => (next) => (action) => {
//   switch (action.type) {
//     case SEND_COMMENTS_TO_SERVER:
//       const { username, newCommentValue: content } = store.getState();
//       console.log(username);
//       axios.post('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/posts/4',
//         {
//           username,
//           newCommentValue: content,
//           name,
//           email,
//         }).then((response) => {
//         console.log('then');
//         console.log(response);
//       }).catch((error) => {
//         console.log('error');
//       });
//       // on laisse continuer l'action sur la route vers le reducer.
//       // cette action sera traitée et permettra de RAZ le champ de saisie.
//       next(action);
//       break;
//     default:
//       next(action);
//   }
// };

// export default CommentsMiddleware;
