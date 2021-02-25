import {
    SAVE_CATEGORIES,
    CHANGE_POSTS_VALUE,

  } from '../actions/posts';
  
  const initialState = {

    categories: [],
    titre: '',
    body: '',
 
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_CATEGORIES:
        return {
          ...state,
          categories: action.data,
          loading: false,
        };
        
      case CHANGE_POSTS_VALUE:
        return {
          ...state,
          [action.fieldName]: action.fieldValue,
        };
      default:
        return state;
    }
  };
  