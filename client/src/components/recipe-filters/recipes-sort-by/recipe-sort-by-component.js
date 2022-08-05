import React, {useCallback} from "react";
import Select from "react-select";
import {recipesSortByOptions} from "../../../app/actions/recipe-sort-by-actions";
import "./recipe-sort-by.scss"

const RecipeSortBy = ({setSortBy, sortByObject}) => {

    const changeSortOrder = useCallback(e => {
        setSortBy(e.value);
    }, [setSortBy]);

    return (
        <Select defaultValue={sortByObject} options={recipesSortByOptions} id="select-sort" className="select-sort"
                onChange={changeSortOrder}/>
    );
};

export default RecipeSortBy;