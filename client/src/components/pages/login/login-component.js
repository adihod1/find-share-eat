import "./login.scss";
import React, {useState} from "react";
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import lizzieImage from '../../../images/lizzieIcon.png'

import jwt_decode from 'jwt-decode';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

function Login({userLoginAction}) {
    const [isError, setIsError] = useState(false);

    const onLoginSuccess = (credentialResponse) => {
        const user = jwt_decode(credentialResponse.credential)
        setIsError(false)
        userLoginAction(user)
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="login-title">
                        Find Share Eat
                    </div>
                    <div className="google-sign-in-button">
                        <GoogleOAuthProvider clientId={CLIENT_ID}>
                            <GoogleLogin
                                auto_select={true}
                                onSuccess={onLoginSuccess}
                                onError={() => setIsError(true)}
                                useOneTap
                            />
                        </GoogleOAuthProvider>
                    </div>
                    {isError ? <div className="error-login">`Something went wrong!`</div> : ''}
                </div>
            </div>

            <div className="lizzie-wrapper">
                <img className="lizzie-image" src={lizzieImage}/>
            </div>
        </div>


    );
}

export default Login;