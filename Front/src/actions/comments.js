// on définit et exporte l'action type
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_NEW_COMMENT = 'SET_NEW_COMMENT';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const SEND_COMMENTS_TO_SERVER = 'SEND_COMMENTS_TO_SERVER';
export const ADD_RECEIVED_COMMENT = 'ADD_RECEIVED_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';

// on définit et exporte l'action creator addMessage
// on but est de créer pour nous un objet action de type ADD_MESSAGE
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

// on définit un action creator avec un paramètre
// qui permet de recueillir la valeur du champ de saisie
export const setNewComment = (value) => ({
  type: SET_NEW_COMMENT,
  newValue: value,
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
