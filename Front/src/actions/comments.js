// on définit et exporte l'action type
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

// on définit et exporte l'action creator addMessage
// on but est de créer pour nous un objet action de type ADD_MESSAGE
export const addComments = () => ({
  type: ADD_COMMENTS,
});

// on définit un action creator avec un paramètre
// qui permet de recueillir la valeur du champ de saisie
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
