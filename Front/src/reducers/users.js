import {
    LOG_OUT,
    SAVE_USER_DATA,
    TOGGLE_MENU,
    CHANGE_USER_FIELD
} from 'src/actions/users'




const initialState = {
    email:'',
    password:'',
    logged: false,
    username:'',
    homeLogin: true,
    menuIsClosed: true,
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
                email: action.data.email,
            };
        case TOGGLE_MENU:
            return {
                ...state,
                menuIsClosed: !state.menuIsClosed,
            };
        case CHANGE_USER_FIELD:
            return {
                ...state,
                [action.fieldName]: action.fieldValue,
            };
              default:
                return { ...state };
    }
}

export default usersReducer;