import actions from "../actions/constants";

const initialState = {
    isLoggedIn: false,
    user: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGOUT : {
            return {isLoggedIn: false, user: null};
        }

        case actions.USER_LOGIN : {
            console.log(action.user)
            return {isLoggedIn: true, user: action.user};
        }

        default:
            return state;
    }
};

export default loginReducer;
