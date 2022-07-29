import React from "react";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Home from "../home/home-connector";
import Sidebar from "../../sidebar/sidebar-connector";
import Spinner from "../../spinner/spinner-connector";
import Welcome from "../welcome/welcome-connector";


function Main({ isLoggedInValue, openLoginModalAction, isModalOpenValue }) {
    const AppRouter = () => {
        return (
            <div>
                <BrowserRouter>
                    <Sidebar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/saved" element={<Profile />} />
                        <Route path="/shared" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }

    const welcomePage = () => {
        return (
            <Welcome />
        )
    }

    return (
        <div className="main">
            <Spinner />
            <div>
                {isLoggedInValue ? AppRouter() : welcomePage()}
            </div>
        </div>
    );
}

export default Main;