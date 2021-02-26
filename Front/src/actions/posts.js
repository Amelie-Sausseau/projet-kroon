export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CHANGE_POSTS_VALUE = 'CHANGE_POSTS_VALUE';
export const FETCH_POSTS_FROM_TAGS = 'FETCH_POSTS_FROM_TAGS';
export const SAVE_POSTS_FROM_TAGS = 'SAVE_POSTS_FROM_TAGS';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
})

export const changeInputPostValue = (fieldValue, fieldName ) => ({
  type: CHANGE_POSTS_VALUE,
  fieldValue,
  fieldName,
})

export const saveCategories = (data) => ({
  type: SAVE_CATEGORIES,
  data,
})

export const fetchPostsFromTags = () => ({
  type: FETCH_POSTS_FROM_TAGS,
})

export const savePostsFromTags = (data) => ({
  type: SAVE_POSTS_FROM_TAGS,
  data,
})