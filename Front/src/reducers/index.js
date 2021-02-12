import {
    PLAY_START,
    STOP_RECORD,
    CHANGE_URL,
   
  } from "../actions";
  
  const initialState = {
    
        record: false,
        recordedSound: false,
        url: '',
  
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
        case CHANGE_URL:
            return {
              ...state,
             url: value,
            }
  
        default:
            return state;
    };
  };
  