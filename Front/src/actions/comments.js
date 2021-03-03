export const ADD_COMMENTS = 'ADD_COMMENTS';
export const SET_NEW_COMMENT = 'SET_NEW_COMMENT';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const SEND_COMMENTS_TO_SERVER = 'SEND_COMMENTS_TO_SERVER';
export const ADD_RECEIVED_COMMENT = 'ADD_RECEIVED_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const ADD_COMMENTS_TO_DB = 'ADD_COMMENTS_TO_DB';
export const SAVE_COMMENTS_DATA = 'SAVE_COMMENTS_DATA';
export const SAVE_LIKES = 'SAVE_LIKES';
export const SET_LIKES = 'SET_LIKES';
export const FETCH_LASTS_COMMENTS = 'FETCH_LASTS_COMMENTS';
export const SAVE_LASTS_COMMENTS = 'SAVE_LASTS_COMMENTS';

export const addComments = () => ({
  type: ADD_COMMENTS,
});


export const setNewComment = (newValue) => ({
  type: SET_NEW_COMMENT,
  newValue,
});

export const saveUsername = (newValue) => ({
  type: SAVE_USERNAME,
  value: newValue,
});

export const sendCommentsToServer = () => ({
  type: SEND_COMMENTS_TO_SERVER,
});

export const addReceivedCommennt = (comment) => ({
  type: ADD_RECEIVED_COMMENT,
  newComment: comment,
});

export const fecthComments = () => ({
  type: FETCH_COMMENTS,
});

export const saveComments = (comments) => ({
  type: SAVE_COMMENTS,
  comments,
});

export const addCommentsToDB = (postId) => ({
  type: ADD_COMMENTS_TO_DB,
  postId,
});

export const saveCommentsData = (comments) => ({
  type: SAVE_COMMENTS_DATA,
  comments,
});

export const saveLikes = (likes) => ({
  type: SAVE_LIKES,
  likes,
});

export const setLikes = (likes) => ({
  type: SET_LIKES,
  likes,
});

export const fetchLastsComments = () => ({
  type: FETCH_LASTS_COMMENTS,
});

export const saveLastsComments = (lastComments) => ({
  type: SAVE_LASTS_COMMENTS,
  lastComments,
})

