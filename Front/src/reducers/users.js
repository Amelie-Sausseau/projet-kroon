import {
  LOG_OUT,
  SAVE_USER_DATA,
  TOGGLE_MENU,
  CHANGE_USER_FIELD,
  CHANGE_FIELD_CREATE_USER,
  CLEAR_FIELD,
} from 'src/actions/users';
import {
  ADD_RECEIVED_COMMENT, SAVE_COMMENTS, SEND_COMMENTS_TO_SERVER, SET_NEW_COMMENT,
} from '../actions/comments';

const initialState = {
  email: '',
  password: '',
  logged: false,
  name: '',
  islogged: true,
  menuIsClosed: true,
  token: '',
  username: '',
  newCommentValue: '',
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
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        name: action.data.name,
        token: action.data.token,
        email: action.data.email,
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
        islogged: false,
      };
    case CHANGE_FIELD_CREATE_USER:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SEND_COMMENTS_TO_SERVER:
      return {
        ...state,
        newCommentValue: '',
      };
    case ADD_RECEIVED_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.newComment,
        ],
      };
    case SET_NEW_COMMENT:
      // on crée une copie du state
      // et on met à jour la valeur de la
      // propriété newCommentValue avec
      // la valeur reçue dans le payload de l'action
      return {
        ...state,
        newCommentValue: action.newValue,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
