import {
  LOG_OUT,
  SAVE_USER_DATA,
  TOGGLE_MENU,
  CHANGE_USER_FIELD,
  CHANGE_FIELD_CREATE_USER,
  CLEAR_FIELD,
  SAVE_POSTS_USER
} from 'src/actions/users';


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
    case SAVE_POSTS_USER:
      return {
        ...state,
        posts: action.data
      }

    default:
      return { ...state };
  }
};

export default usersReducer;
