import {
    PLAY_START,
    STOP_RECORD,
    CHANGE_URL,
    SAVE_POSTS,
   
  } from "../actions";
  
  const initialState = {
    
        record: false,
        recordedSound: false,
        url: '',
        data:[],
        loading: true,
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
  
        case PLAY_START: 
            return {
                ...state,
                record: true,
            };
        case STOP_RECORD:
            return {
              ...state,
              record: false,
              recordedSound: true,
            }
          case SAVE_POSTS:
            return {
              ...state,
              data: action.data,
            }
        default:
            return state;
    };
  };
  