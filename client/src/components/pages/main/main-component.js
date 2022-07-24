import React from "react";
import "./main.scss";
import RecipesList from "../../recipes-list/RecipesList";

function Main() {
    return (
        <div className="main">
            <RecipesList />
        </div>
    );
}

export default Main;