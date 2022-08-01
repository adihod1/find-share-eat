import actionTypes from "../actions/constants";

const initialState = {
    array: [],
    ingredients: []
};

const recipeByIngredientReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INGREDIENT_VALUE: {
            return {...state, array: action.array};
        }

        case actionTypes.FETCHED_INGREDIENTS: {
            const mapped = action.ingredients.map(ing => ({label: ing.ingredientName, value: ing.ingredientName}))
            return {ingredients: mapped, array: mapped};
        }

        default:
            return state;
    }
};
export default recipeByIngredientReducer;