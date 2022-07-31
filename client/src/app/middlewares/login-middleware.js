import actions from "../actions/constants";
import {googleLogout} from '@react-oauth/google';
import Login from "../../api/login";
import {spinner} from "../actions/spinner-actions";
import {objectToLoginSchema} from "../../utils/schemas/login-schema";
import {AuthToken} from "../../utils/token-storage";

const loginClient = new Login()

export function userLogout() {
    return async function userLogoutThunk(dispatch, getState) {
        AuthToken.removeToken()
        await googleLogout();
        dispatch({type: actions.USER_LOGOUT})
    }
}

export function userLogin(user) {
    return async function userLoginThunk(dispatch, getState) {
        try {
            spinner(dispatch, true)
            const response = await loginClient.setLoggedIn(objectToLoginSchema(user));
            dispatch({type: actions.USER_LOGIN, user: response.body})
        } catch (e) {
            console.error(e);
            //todo dispatch type login error
        }
        spinner(dispatch, false)

    }
}