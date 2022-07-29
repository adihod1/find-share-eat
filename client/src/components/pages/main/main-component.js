import React from "react";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Home from "../home/home-connector";
import Sidebar from "../../sidebar/sidebar-connector";
import Spinner from "../../spinner/spinner-connector";
import Welcome from "../welcome/welcome-connector";


function Main({ isLoggedInValue, openLoginModalAction, isModalOpenValue }) {

    return (
        <div className="main">
            <Spinner />
            <div className={'route-container'}>
                < BrowserRouter >
                    {isLoggedInValue ?
                        <>
                            <Sidebar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/saved" element={<Profile />} />
                                <Route path="/shared" element={<Profile />} />
                            </Routes>
                        </>
                        :
                        <Routes>
                            <Route path="/" element={<Welcome />} />
                        </Routes>}
                </BrowserRouter >
            </div >
        </div >
    );
}

export default Main;