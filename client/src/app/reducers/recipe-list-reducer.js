import actions from "../actions/constants";

const initialState = {
    recipes: [],
    userRecipes: []
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCHED_RECIPES: {
            return { recipes: action.recipes };
        }
        case actions.USER_RECIPES: {
            return { userRecipes: action.recipes };
        }
        default:
            return state;
    }
};

export default recipesReducer;
