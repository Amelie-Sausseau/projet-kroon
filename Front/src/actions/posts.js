export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CHANGE_POSTS_VALUE = 'CHANGE_POSTS_VALUE';
export const FETCH_POSTS_FROM_TAGS = 'FETCH_POSTS_FROM_TAGS';
export const SAVE_POSTS_FROM_ID = 'SAVE_POSTS_FROM_ID';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const SET_FAVORITES = 'SET_FAVORITES';
export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const SET_DELETE_FAVORITES = 'SET_DELETE_FAVORITES';
export const SET_REPORT_POST = 'SET_REPORT_POST';
export const SET_DELETE = 'SET_DELETE';
export const CLEAR_INPUT_POST = 'CLEAR_INPUT_POST';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const changeInputPostValue = (fieldValue, fieldName) => ({
  type: CHANGE_POSTS_VALUE,
  fieldValue,
  fieldName,
});

export const saveCategories = (data) => ({
  type: SAVE_CATEGORIES,
  data,
});

export const fetchPostsFromTags = () => ({
  type: FETCH_POSTS_FROM_TAGS,
});

export const saveCommentsUser = (data) => ({
  type: SAVE_POSTS_FROM_ID,
  data,
});

export const saveFavorites = (favorites) => ({
  type: SAVE_FAVORITES,
  favorites,
});

export const setFavorites = (postId) => ({
  type: SET_FAVORITES,
  postId,
});

export const setDeleteFavorites = (postId) => ({
  type: SET_DELETE_FAVORITES,
  postId,
});

export const changeSelectValue = (data) => ({
  type: CHANGE_SELECT_VALUE,
  data,
});

export const setReportPost = (postId) => ({
  type: SET_REPORT_POST,
  postId,
});

export const setDelete = (postId) => ({
  type: SET_DELETE,
  postId,
});

export const clearInputPost = () => ({
  type: CLEAR_INPUT_POST,
});
