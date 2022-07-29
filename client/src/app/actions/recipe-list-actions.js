import {fetchRecipes} from "../middlewares/recipe-list-middleware";

export const fetchRecipesAction = () => {
    return dispatch => {
        const fetchRecipesThunk = fetchRecipes();
        dispatch(fetchRecipesThunk)
    };
}
