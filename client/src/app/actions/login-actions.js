import {userLogin, userLogout} from "../middlewares/login-middleware";
import actions from "./constants";

export const userLoginAction = (user) => {
    return dispatch => {
        const userLoginThunk = userLogin(user); //actionsTypes.USER_LOGIN;
        dispatch(userLoginThunk)
    };
}

export const userLogoutAction = () => {
    return dispatch => {
        const userLogoutThunk = userLogout(); //actionsTypes.USER_LOGOUT;
        dispatch(userLogoutThunk)
    };
}

export const openLoginModalAction = () => {
    return dispatch => {
        dispatch({type: actions.OPEN_MODAL})
    };
}

export const closeLoginModalAction = () => {
    return dispatch => {
        dispatch({type: actions.CLOSE_MODAL})
    };
}

