import "./home.scss";
import React, {useEffect} from "react";
import RecipesList from '../../recipes-list/recipe-list-connector';

function Home({fetchRecipesAction, recipesValue}) {

    useEffect(() => {
        fetchRecipesAction()
    }, [])

    return (
        <div className={"home-container"}>
            {recipesValue.length > 0 && <RecipesList recipes={recipesValue}/>}
        </div>
    );

}

export default Home;