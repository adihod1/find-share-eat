import React from "react";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Home from "../home/home-connector";
import Sidebar from "../../sidebar/sidebar-connector";
import Spinner from "../../spinner/spinner-connector";
import Welcome from "../welcome/welcome-connector";
import RecipeForm from "../../recipe/recipe-form/form-connector";

function Main({ isLoggedInValue, openLoginModalAction, isModalOpenValue }) {
  return (
    <div className="main">
      <Spinner />
      <BrowserRouter>
        {isLoggedInValue ? (
          <>
            <Sidebar />
            <div className={"screens"}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/saved" element={<Profile />} />
                <Route path="/shared" element={<Profile />} />
                <Route path="/share-recipe" element={<RecipeForm />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Main;
