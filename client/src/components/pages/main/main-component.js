import React from "react";
import Spinner from "../../spinner/spinner-connector";
import Login from "../login/login-component"
import "./main.scss";

function Main() {
    return (
        <div className="main">
            <Spinner/>
            <Login/>
        </div>
    );
}

export default Main;