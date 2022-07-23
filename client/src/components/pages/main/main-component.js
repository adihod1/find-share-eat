import React from "react";
import Spinner from "../../spinner/spinner-connector";
import Login from "../login/login-connector"
import "./main.scss";


function Main({userValue, isLoggedInValue, userLogoutAction}) {

    const loginDetails = () => {
        return (
            <div className="user-login-details">
                <img alt="" src={userValue.picture}/>
                <span>Hello {userValue.name} / {userValue.email}</span>
                <button onClick={userLogoutAction}> Logout</button>
            </div>
        )
    }

    return (
        <div className="main">
            <Spinner/>
            <div>
                {isLoggedInValue ? loginDetails() : <Login/>}
            </div>
        </div>
    );
}

export default Main;