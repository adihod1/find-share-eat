import actionTypes from "../actions/constants";

const initialState = {
    selected: [],
    categories: []
};

const recipeByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.CATEGORY_VALUE: {
            return {...state, selected: action.selected};
        }

        case actionTypes.FETCHED_CATEGORIES: {
            const allCategories = action.categories.map(({categoryName}) => ({
                label: categoryName,
                value: categoryName
            }))
            return {categories: allCategories, selected: []};
        }

        default:
            return state;
    }
};
export default recipeByCategoryReducer;