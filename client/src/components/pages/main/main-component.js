import React, {useEffect} from "react";
import "./main.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "../profile/Profile";
import Home from "../home/home-connector";
import Sidebar from "../../sidebar/sidebar-connector";
import Spinner from "../../spinner/spinner-connector";
import Welcome from "../welcome/welcome-connector";
import {AuthToken} from "../../../utils/token-storage";


function Main({isLoggedInValue, userLoginAction}) {
    useEffect(() => {
        const user = AuthToken.checkForToken()
        if (user) {
            userLoginAction(user)
        }
    }, [])

    return (
        <div className="main">
            <Spinner/>
            <BrowserRouter>
                {isLoggedInValue ?
                    <>
                        <Sidebar/>
                        <div className={'screens'}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/saved" element={<Profile/>}/>
                                <Route path="/shared" element={<Profile/>}/>
                            </Routes>
                        </div>
                    </>
                    :
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                    </Routes>}
            </BrowserRouter>
        </div>
    );
}

export default Main;