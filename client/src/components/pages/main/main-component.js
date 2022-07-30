import React from "react";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Home from "../home/home-connector";
import Sidebar from "../../sidebar/sidebar-connector";
import Spinner from "../../spinner/spinner-connector";
import Welcome from "../welcome/welcome-connector";
import RecipeForm from "../../recipe/recipe-form/RecipeForm";

<<<<<<< HEAD
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
            <Route path="/shared" element={<RecipeForm />} />
            <Route path="/addrecipe" element={<RecipeForm />} />
          </Routes>
        </BrowserRouter>
      </div>
=======

function Main({ isLoggedInValue, openLoginModalAction, isModalOpenValue }) {

    return (
        <div className="main">
            <Spinner />
            < BrowserRouter >
                {isLoggedInValue ?
                    <>
                        <Sidebar />
                        <div className={'screens'}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/saved" element={<Profile />} />
                                <Route path="/shared" element={<Profile />} />
                            </Routes>
                        </div>
                    </>
                    :
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                    </Routes>}
            </BrowserRouter >
        </div >
>>>>>>> main
    );
  };

  const welcomePage = () => {
    return <Welcome />;
  };

  return (
    <div className="main">
      <Spinner />
      <div>{isLoggedInValue ? AppRouter() : welcomePage()}</div>
    </div>
  );
}

export default Main;
