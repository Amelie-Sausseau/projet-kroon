export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SAVE_USER_DATA = "SAVE_USER_DATA ";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SIGN_UP = 'SIGN_UP';
export const CHANGE_FIELD_CREATE_USER = 'CHANGE_FIELD_CREATE_USER';
export const CLEAR_FIELD = 'CLEAR_FIELD';
export const FETCH_DATA_USER = 'FETCH_DATA_USER';
export const FETCH_POSTS_USER_LOGIN = 'FETCH_POSTS_USER_LOGIN';
export const SAVE_POSTS_USER = 'SAVE_POSTS_USER';

export const logIn = () => ({
    type: LOG_IN,
  });
  
export const logOut = () => ({
    type: LOG_OUT,
  });

export const saveUserData = (data) => ({
    type: SAVE_USER_DATA,
    data,
  });

  export const toggleMenu = () => ({
    type: TOGGLE_MENU,
  });

  export const changeFieldCreateUser = (fieldValue, fieldName) => ({
    type: CHANGE_FIELD_CREATE_USER,
    fieldValue,
    fieldName,
  });

  export const signUp = () => ({
    type: SIGN_UP
  });

  export const changeUserField = (fieldValue, fieldName) => ({
    type: CHANGE_USER_FIELD,
    fieldValue,
    fieldName,
  });

  export const clearField = () => ({
    type: CLEAR_FIELD,
  });

  export const fetchDataUser = () => ({
    type: FETCH_DATA_USER,
  })

  export const fetchPostUser = () => ({
    type: FETCH_POSTS_USER_LOGIN,
  })

  export const savePostsUser = (data) => ({
    type: SAVE_POSTS_USER,
    data,
  })