import {
  LOG_OUT,
  SAVE_USER_DATA,
  TOGGLE_MENU,
  CHANGE_USER_FIELD,
  CHANGE_FIELD_CREATE_USER,
  CLEAR_FIELD,
  SAVE_POSTS_USER,
  SAVE_COMMENTS_USER,
  SAVE_ALL_POSTS,
  SAVE_FAVORITES_POSTS_USER,
  SAVE_USER_DATA_SIGN_UP,
} from 'src/actions/users';

import {
  SAVE_POSTS_FROM_ID,

} from 'src/actions/posts';

import { SAVE_LIKES } from 'src/actions/comments';

const initialState = {
  email: '',
  password: '',
  logged: false,
  name: '',
  islogged: false,
  menuIsClosed: true,
  token: '',
  username: '',
  posts: [],
  comments: [],
  allPosts: [],
  id: null,
  favorites: [],
  slug: '',

};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        name: '',
        email: '',
        password: '',
        username: '',
        token: '',
        likes: [],
        favorites: [],
        slug: '',
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        token: action.data.token,

      };
    case SAVE_USER_DATA_SIGN_UP:
       return {
        ...state,
        token: action.data.token,
        name: '',
        email: '',
        password: '',
        username: '',
        };
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsClosed: !state.menuIsClosed,
      };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        // on positionne dans le state la propriété correspondant
        // au champ et on y place la valeur. ces 2 infos sont transmises
        // dans l'action
        [action.fieldName]: action.fieldValue,
      };
    case CLEAR_FIELD:
      return {
        ...state,
        email: '',
        password: '',
        name: '',
        logged: false,
        token: '',
      };
    case CHANGE_FIELD_CREATE_USER:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SAVE_POSTS_USER:
      return {
        ...state,
        posts: action.data,
      };
    case SAVE_COMMENTS_USER:
      return {
        ...state,
        comments: action.data,
      };
    case SAVE_ALL_POSTS:
      return {
        ...state,
        allPosts: action.data,
      };
    case SAVE_POSTS_FROM_ID:
      return {
        ...state,
        posts: action.data,
      };
    case SAVE_LIKES:
      return {
        ...state,
        likes: action.likes,
      };
    case SAVE_FAVORITES_POSTS_USER:
      return {
        ...state,
        favorites: action.data,
      }
    default:
      return { ...state };
  }
};

export default usersReducer;
