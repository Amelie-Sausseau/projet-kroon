import {
    LOG_OUT,
    SAVE_USER_DATA,
} from 'src/actions/users'




const initialState = {
    email:'',
    password:'',
    logged: false,
    username:'',
    homeLogin: false,
}

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state,
                logged: false,
                username: null,
                email: '',
                password: '',
              };
        case SAVE_USER_DATA:
            return {
                ...state,
                logged: true,
                username: action.data.username,
                token: action.data.token,
            };
              default:
                return { ...state };
    }
}

export default usersReducer;