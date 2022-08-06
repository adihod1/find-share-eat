import actionTypes from "../actions/constants";
import {recipesSortByOptions} from "../actions/recipe-sort-by-actions";

const initialState = {
    sort: recipesSortByOptions[0].value,
    label: recipesSortByOptions[0].label,
    obj: recipesSortByOptions[0]
};

const recipeSortByReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SORT_VALUE: {
            const current = recipesSortByOptions.find(({value}) => value == action.sort);
            return {sort: action.sort, label: current.label, obj: current};
        }

        default:
            return state;
    }
};
export default recipeSortByReducer;