import {
    SAVE_CATEGORIES,
    CHANGE_POSTS_VALUE,
    SAVE_POSTS_FROM_TAGS,
    CHANGE_SELECT_VALUE
  } from '../actions/posts';
  
  const initialState = {

    categories: [],
    titre: '',
    body: '',
    posts: [],
    categorieId: 1,
 // id à creuser
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_CATEGORIES:
        return {
          ...state,
          categories: action.data,
     
        };
        
      case CHANGE_POSTS_VALUE:
        return {
          ...state,
          [action.fieldName]: action.fieldValue,
        };

      case SAVE_POSTS_FROM_TAGS:
        return {
          ...state,
          posts: action.data,
        };
      
        case CHANGE_SELECT_VALUE
        :
          return {
            ...state,
            categorieId: action.data,
          }
      default:
        return state;
    }
  };
  