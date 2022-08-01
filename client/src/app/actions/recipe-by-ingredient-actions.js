import actionsTypes from "./constants";
import {getAllIngredients} from "../middlewares/recipe-list-middleware";

const ingredientValue = (array) => ({
    type: actionsTypes.INGREDIENT_VALUE,
    array
});

export const setRecipeByIngredientAction = (array) => {
    return dispatch => {
        dispatch(ingredientValue(array));
    };
};

export const getAllIngredientsAction = () => {
    return dispatch => {
        const getAllIngredientsThunk = getAllIngredients();
        dispatch(getAllIngredientsThunk)
    };
}