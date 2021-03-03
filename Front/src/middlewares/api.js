import axios from 'axios';

import {
  FETCH_POSTS_USER_LOGIN,
  savePostsUser,
  FETCH_COMMENTS_USER_LOGIN,
  saveCommentsUser,
  FETCH_ALL_POSTS,
  saveAllPosts,
  FETCH_FAVORITES_USER_LOGIN,
  saveFavoritesPostsUser,
} from 'src/actions/users';

import {
  FETCH_CATEGORIES,
  saveCategories,
  FETCH_POSTS_FROM_TAGS,
  savePostsFromTags,
  SET_DELETE_FAVORITES,
  SET_FAVORITES,
  SET_REPORT_POST,
  SET_DELETE,
} from 'src/actions/posts';

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
      axios.get(`${url}/api/v1/users/posts`,
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
      const token2 = store.getState().users.token;

      console.log(token2);
      axios.get(`${url}/api/v1/users/comments`,
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

    case FETCH_ALL_POSTS:
      axios.get(`${url}/api/v1/posts`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveAllPosts(response.data));
        }).catch((error) => {
          console.error('error');
        });
      next(action);
      break;

    case SET_FAVORITES:
      const id = action.postId;
      const token3 = store.getState().users.token;

      axios.post(`${url}/api/v1/posts/${id}/bookmark`, {},
        {
          headers: {
            Authorization: `Bearer ${token3}`,
          },
        }).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    case SET_DELETE_FAVORITES:
      const id2 = action.postId;
      const token4 = store.getState().users.token;

      console.log(token4);
      axios.delete(`${url}/api/v1/posts/${id2}/bookmark`,
        {
          headers: {
            Authorization: `Bearer ${token4}`,
          },
        }).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    case FETCH_FAVORITES_USER_LOGIN:
      const token5 = store.getState().users.token;

      console.log(token5);
      axios.get(`${url}/api/v1/users/bookmarks`,
        {
          headers: {
            Authorization: `Bearer ${token5}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log(response);
          store.dispatch(saveFavoritesPostsUser(response.data));
        }).catch((error) => {
          // TODO
          console.log('error');
        }).finally((response) => {
          // TODO
        });
      next(action);
      break;

    case SET_REPORT_POST:
      const id3 = action.postId;
      const token6 = store.getState().users.token;

      console.log(id3);
      axios.put(`${url}/api/v1/posts/${id3}/report`, {},
        {
          headers: {
            Authorization: `Bearer ${token6}`,
          },
        }).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;

      case SET_DELETE:
      const id4 = action.postId;
      const token7 = store.getState().users.token;

      console.log(id4);
      axios.delete(`${url}/api/v1/posts/${id4}`,
        {
          headers: {
            Authorization: `Bearer ${token7}`,
          },
        }).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    default:
      next(action);
  }
};
