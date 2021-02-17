export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SAVE_USER_DATA = "SAVE_USER_DATA ";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';


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
  export const changeUserField = (fieldValue, fieldName) => ({
    type: CHANGE_USER_FIELD,
    fieldValue,
    fieldName,
  });