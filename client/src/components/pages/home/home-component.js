import "./home.scss";
import React, { useEffect } from "react";
import RecipesList from '../../recipes-list/recipe-list-connector';
import UploadImage from "../../uploadImage/upload-image-component";

function Home({ fetchRecipesAction, recipesValue }) {

    useEffect(() => {
        fetchRecipesAction()
    }, [])

    return (
        <div className={"home-container"}>
            <RecipesList recipes={recipesValue} showFilter={true} />
        </div>
    );

}

export default Home;