import axios from 'axios';

import { FETCH_POSTS, savePosts } from 'src/actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      axios.get('http://localhost:8000/api/v1/users/')
        .then((response) => {
          console.log(response);
          store.dispatch(savePosts(response));
        }).catch((error) => {
          console.error('error');
        });
        
      next(action);
      break;

    default:
      next(action);
  }
};


// {
//   axios.get('http://localhost:8000/api/v1/users/')
//   .then((response) => {
//     console.log(response);
//     setName('test');
//     console.log(name);
//   })
//   .catch(() => {
//     setError(true);
//   })
// };
// .finally((response) => {
//   console.error('finally');

// })
