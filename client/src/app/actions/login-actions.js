import {userLogin, userLogout} from "../middlewares/login-middleware";

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

