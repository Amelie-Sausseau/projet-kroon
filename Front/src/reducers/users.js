import {
  LOG_OUT,
  SAVE_USER_DATA,
  TOGGLE_MENU,
  CHANGE_USER_FIELD,
  CHANGE_FIELD_CREATE_USER,
  CLEAR_FIELD,
  SAVE_POSTS_USER,
  SAVE_COMMENTS_USER,
} from 'src/actions/users';

import {
  SAVE_POSTS_FROM_ID

} from 'src/actions/posts'


const initialState = {
  email: '',
  password: 'admin',
  logged: false,
  name: '',
  islogged: false,
  menuIsClosed: true,
  token: '',
  username: 'admin@kroon.fr',
  posts: [],
  comments: [],

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
        token:'',
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        // name: action.data.name,
        token: action.data.token,
        // email: action.data.email,
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
        posts: action.data
      };
      case SAVE_COMMENTS_USER:
        return {
          ...state,
          comments: action.data
        };
        case SAVE_POSTS_FROM_ID:
      return {
        ...state,
        posts: action.data
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
