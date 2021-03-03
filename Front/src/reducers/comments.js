import {
  ADD_RECEIVED_COMMENT,
  SAVE_COMMENTS,
  SEND_COMMENTS_TO_SERVER,
  SET_NEW_COMMENT,
  SAVE_COMMENTS_DATA,
  ADD_COMMENTS_TO_DB,
  SET_LIKES,
} from '../actions/comments';
// import { getHighestCommentId } from '../selectors/comments';

const initialState = {
  body: '',
  comments: [],
  id: null,
  likes: [],
};

const commentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_COMMENTS_TO_SERVER:
      return {
        ...state,
        body: '',
      };
    case ADD_RECEIVED_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.newComment,
        ],
      };
/*     case ADD_COMMENTS_TO_DB: {
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            body: state.comments.body,
            id: action.postId,
          },
        ],
        body: '',
      };
    } */
    case SET_NEW_COMMENT:
      return {
        ...state,
        body: action.newValue,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case SAVE_COMMENTS_DATA:
      return {
        ...state,
        comments: action.comments,
      };
    case SET_LIKES:
      return {
        ...state,
        likes: action.likes,
      };
    default:
      return { ...state };
  }
};

export default commentsReducer;
