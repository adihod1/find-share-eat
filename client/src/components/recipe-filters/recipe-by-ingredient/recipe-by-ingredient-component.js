import React, {useCallback, useEffect} from "react";
import Select from "react-select";
import "./recipe-by-ingredient.scss";

//@formatter:off
const RecipeByIngredient = ({setRecipeByIngredientAction, recipeByIngredientArray, getAllIngredientsAction, allIngredientsValue}) => {
//@formatter:on

    useEffect(() => {
        getAllIngredientsAction()
    }, [setRecipeByIngredientAction])

    const changeIngredients = useCallback(ingredientArray => {
        console.log('ingredientArray', ingredientArray)
        setRecipeByIngredientAction(ingredientArray);
    }, []);

    return (
        <Select isMulti={true} defaultValue={recipeByIngredientArray} options={allIngredientsValue}
                id="select-status"
                className="select-status"
                onChange={changeIngredients}/>
    );
};

export default RecipeByIngredient;