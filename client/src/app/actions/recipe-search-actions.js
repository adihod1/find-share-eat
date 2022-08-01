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
        if (!input?.trim().length) {
            return dispatch(badInputSearchRecipe(input));
        }
        dispatch(searchRecipe(input));
    };
};