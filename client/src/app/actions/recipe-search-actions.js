import actionsTypes from "./constants";

const searchRecipe = (search) => ({
    type: actionsTypes.SEARCH_RECIPE,
    search
});

const badInputSearchRecipe = () => ({
    type: actionsTypes.BAD_INPUT,
});

export const setRecipeSearchAction = (input) => {
    return dispatch => {
        dispatch(searchRecipe(input));
    };
};