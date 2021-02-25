import {
    CHANGE_CONTACT_MESSAGE,
  } from '../actions/contact';
  
  const initialState = {

    name: '',
    email:'',
    message:'',
 
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_CONTACT_MESSAGE:
        return {
          ...state,
          [action.fieldName]: action.fieldValue,

        };
      default:
        return state;
    }
  };
  