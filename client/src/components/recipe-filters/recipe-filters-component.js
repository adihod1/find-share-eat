import React from "react";
import RecipeSortBy from "./recipes-sort-by/recipe-sort-by-connector";
import RecipeSearch from "./recipe-search/recipe-search-connector";
import "./recipe-filters.scss";
import RecipeByIngredient from "./recipe-by-ingredient/recipe-by-ingredient-connector";

const RecipeFilters = ({}) => {
    return (
        <div className="recipe-filters">
            <RecipeSortBy/>
            <RecipeSearch/>
            <RecipeByIngredient/>
        </div>
    );
};

export default RecipeFilters;