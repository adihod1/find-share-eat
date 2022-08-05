import actionsTypes from "./constants";
import {getAllCategories} from "../middlewares/recipe-list-middleware";

const ingredientValue = (selected) => ({
    type: actionsTypes.CATEGORY_VALUE,
    selected
});

export const setSelectedCategoriesAction = (selected) => {
    return dispatch => {
        dispatch(ingredientValue(selected));
    };
};

export const getAllCategoriesAction = () => {
    return dispatch => {
        const getAllIngredientsThunk = getAllCategories();
        dispatch(getAllIngredientsThunk)
    };
}