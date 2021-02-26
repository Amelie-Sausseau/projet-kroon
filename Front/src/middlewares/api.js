import axios from 'axios';

import { FETCH_POSTS_USER_LOGIN, savePostsUser, FETCH_COMMENTS_USER_LOGIN, saveCommentsUser } from 'src/actions/users';

import { FETCH_CATEGORIES, saveCategories, FETCH_POSTS_FROM_TAGS, savePostsFromTags } from 'src/actions/posts';

import { FETCH_POSTS, savePosts, FETCH_POST } from 'src/actions';

import { url } from 'src/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POSTS:
      axios.get(`${url}/api/v1/posts/lasts`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(savePosts(response.data));
        }).catch((error) => {
          console.error('error');
        });
      next(action);
      break;

      case FETCH_CATEGORIES:
      axios.get(`${url}/api/v1/tags/`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveCategories(response.data));
        }).catch((error) => {
          console.error('error');
        });
      next(action);
      break;

       case FETCH_POSTS_USER_LOGIN:
        const { token } = store.getState().users;
        console.log(token);
        axios.get('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/users/posts',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            console.log(response);            
            store.dispatch(savePostsUser(response.data));
            console.log(response.data);
          }).catch((error) => {
            // TODO
            console.log('error');
          }).finally((response) => {
            // TODO
          });
        next(action);
        break;

        case FETCH_COMMENTS_USER_LOGIN:
          const token2  = store.getState().users.token;

          console.log(token2);
          axios.get('http://ec2-3-82-153-17.compute-1.amazonaws.com/api/v1/users/comments',
            {
              headers: {
                Authorization: `Bearer ${token2}`,
              },
            })
            .then((response) => {
              console.log(response.data);
              console.log(response);            
              store.dispatch(saveCommentsUser(response.data));
              console.log(response.data);
            }).catch((error) => {
              // TODO
              console.log('error');
            }).finally((response) => {
              // TODO
            });
          next(action);
          break;

        case FETCH_POST:
          axios.get(`${url}/api/v1/posts/8`)
            .then((response) => {
              console.log(response.data);
              store.dispatch(savePost(response.data));
            }).catch((error) => {
              console.error('error');
            });
          next(action);
          break;
      
          case FETCH_POSTS_FROM_TAGS:
      // axios.get(`${url}/api/v1/tags/${id}/posts`)
      axios.get(`${url}/api/v1/tags/1/posts`)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          store.dispatch(savePostsFromTags(response.data));
        }).catch((error) => {
          console.error('error');
        });
      next(action);
      break;      

    default:
      next(action);
  }
};
