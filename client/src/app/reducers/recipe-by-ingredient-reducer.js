import actionTypes from "../actions/constants";

const initialState = {
    selected: [],
    ingredients: []
};

const recipeByIngredientReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INGREDIENT_VALUE: {
            return {...state, selected: action.selected};
        }

        case actionTypes.FETCHED_INGREDIENTS: {
            const allIngredients = action.ingredients.map(ing => ({
                label: ing.ingredientName,
                value: ing.ingredientName
            }))
            return {ingredients: allIngredients, selected: []};
        }

        default:
            return state;
    }
};
export default recipeByIngredientReducer;