export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CHANGE_POSTS_VALUE = 'CHANGE_POSTS_VALUE';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
})

export const changeInputPostValue = (fieldValue, fieldName ) => ({
  type: CHANGE_POSTS_VALUE,
  fieldValue,
  fieldName,
})

// export const