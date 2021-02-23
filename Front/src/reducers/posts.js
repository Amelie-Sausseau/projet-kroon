import {
    SAVE_CATEGORIES,
  } from '../actions/posts';
  
  const initialState = {

    categories: [],
 
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case SAVE_CATEGORIES:
        return {
          ...state,
          categories: action.data,
          loading: false,
        };
      default:
        return state;
    }
  };
  