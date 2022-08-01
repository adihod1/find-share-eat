import actionTypes from "../actions/constants";

const initialState = {
    search: ''
};

const recipeSearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SEARCH_RECIPE: {
            return {search: action.search};
        }

        case actionTypes.SEARCH_RECIPE_BAD_INPUT: {
            return {search: initialState.search};
        }

        default:
            return state;
    }
};
export default recipeSearchReducer;