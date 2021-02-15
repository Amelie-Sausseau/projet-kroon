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
        loading: false,
  
  };
  export default (state = initialState, action = {}) => {
    switch (action.type) {
  
        case PLAY_START: 
            return {
                ...state,
                record: true,

            };
        case CHANGE_URL:
            return {
              ...state,
              url: action.newValue
            }
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
              loading: false,
            }
        default:
            return state;
    };
  };
  