import {
    ADD_RECEIVED_COMMENT, SAVE_COMMENTS, SEND_COMMENTS_TO_SERVER, SET_NEW_COMMENT,
  } from '../actions/comments';


const initialState = {
    newCommentValue: '',
    comments: [],
}



  const commentsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  case SEND_COMMENTS_TO_SERVER:
      return {
        ...state,
        newCommentValue: '',
      };
    case ADD_RECEIVED_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.newComment,
        ],
      };
    case SET_NEW_COMMENT:
      return {
        ...state,
        newCommentValue: action.newValue,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

      default:
        return { ...state };
    }
  };
  
  export default commentsReducer;
