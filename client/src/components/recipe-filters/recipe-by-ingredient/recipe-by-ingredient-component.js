import React, {useCallback, useEffect} from "react";
import Select from "react-select";
import "./recipe-by-ingredient.scss";


const RecipeByIngredient = ({setRecipeByIngredientAction, recipeByIngredientArray, getAllIngredientsAction, allIngredientsValue}) => {

    useEffect(() => {
        getAllIngredientsAction()
    }, [setRecipeByIngredientAction])

    const changeIngredients = useCallback(ingredientArray => {
        setRecipeByIngredientAction(ingredientArray);
    }, []);

    return (
        <Select isMulti={true} defaultValue={recipeByIngredientArray} options={allIngredientsValue}
                id="select-ingredient"
                className="select-ingredient"
                placeholder="select ingredients"
                onChange={changeIngredients}/>
    );
};

export default RecipeByIngredient;