import "./login.scss";
import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import lizzieImage from '../../../images/lizzieIcon.png'
import {AuthToken} from "../../../utils/token-storage";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

function Login({ userLoginAction, closeLoginModalAction }) {
    const [isError, setIsError] = useState(false);
    const [isModalOpen, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        closeLoginModalAction()
    }

    const onLoginSuccess = (credentialResponse) => {
        const user = AuthToken.parseToken(credentialResponse.credential)
        AuthToken.addToken(credentialResponse.credential)
        setIsError(false)
        userLoginAction(user)
    }

    return (
        <Modal show={isModalOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <img className="lizzie-icon" src={lizzieImage} />
            </Modal.Footer>
        </Modal>
    );

}

export default Login;