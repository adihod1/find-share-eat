import actions from "../actions/constants";
import {googleLogout} from '@react-oauth/google';
import LoginClient from "../../api/login-client";
import {spinner} from "../actions/spinner-actions";

const loginClient = new LoginClient()

export function userLogout() {
    return async function userLogoutThunk(dispatch, getState) {
        const response = await googleLogout();
        console.log(response)
        dispatch({type: actions.USER_LOGOUT})
    }
}

export function userLogin(user) {
    return async function userLoginThunk(dispatch, getState) {
        try {
            spinner(dispatch, true)
            const response = await loginClient.setLoggedIn(user);
            console.log(response)
            dispatch({type: actions.USER_LOGIN, user: response.body})
        } catch (e) {
            //todo dispatch type login error
        }
        spinner(dispatch, false)

    }
}