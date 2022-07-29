import "./home.scss";
import React from "react";
import RecipesList from '../../recipes-list/recipe-list-connector'

function Home() {

    return (
        <div className={"home-container"}>
            <RecipesList />
        </div>
    );

}

export default Home;