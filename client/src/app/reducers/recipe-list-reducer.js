import actions from "../actions/constants";

const initialState = {
    recipes: []
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCHED_RECIPES: {
            return {recipes: action.recipes};
        }

        default:
            return state;
    }
};

export default recipesReducer;
