import actionsTypes from "./constants";

export const recipesSortByOptions = [
    {label: 'A-Z', value: 'ASC'},
    {label: 'Z-A', value: 'DESC'}
];

const sortValue = (sort) => ({
    type: actionsTypes.SORT_VALUE,
    sort
});


export const setSortBy = (sort) => {
    return dispatch => {
        dispatch(sortValue(sort));
    };
};
