import {
    SAVE_CATEGORIES_1,
    SAVE_CATEGORIES_2,
    SAVE_CATEGORIES_3,
    SAVE_CATEGORIES_4,
    SAVE_CATEGORIES_5,
  } from 'src/actions/categories';

  const initialState = {
      categorieMusic: [],
      categorie2: [],
      categorie3: [],
      categorie4: [],
      categorie5: [],

  };

  const categoriesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_CATEGORIES_1:
            return {
              ...state,
              categorieMusic: action.data
            };
          case SAVE_CATEGORIES_2:
            return {
              ...state,
              categorie2: action.data
            };
          case SAVE_CATEGORIES_3:
            return {
              ...state,
              categorie3: action.data
            };
          case SAVE_CATEGORIES_4:
            return {
              ...state,
              categorie4: action.data
            };
          case SAVE_CATEGORIES_5:
            return {
                ...state,
                categorie5: action.data
            };
          default:
            return { ...state };
        }
      };
  
  export default categoriesReducer;
  