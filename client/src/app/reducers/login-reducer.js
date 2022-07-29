import actions from "../actions/constants";

const initialState = {
    isModalOpen: false,
    isLoggedIn: false,
    user: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGOUT: {
            return { isLoggedIn: false, user: null };
        }

        case actions.USER_LOGIN: {
            console.log(action.user)
            return { isLoggedIn: true, user: action.user };
        }

        case actions.OPEN_MODAL: {
            return { isModalOpen: true };
        }

        case actions.CLOSE_MODAL: {
            return { isModalOpen: false };
        }

        default:
            return state;
    }
};

export default loginReducer;
