import React, {useCallback, useState} from "react";
import "./recipe-search.scss";

let _timeout;

const RecipeSearch = ({setRecipeSearchAction}) => {
    const [search, setSearch] = useState('');

    const onRecipeInputChange = useCallback(e => {
        const value = e.target.value
        setSearch(value)

        if (_timeout) {
            clearTimeout(_timeout);
        }
        _timeout = setTimeout(() => {
            setRecipeSearchAction(value);
            clearTimeout(_timeout);
        }, 1500)

    }, [search]);

    return (
        <div className="recipe-search">
            <input onChange={onRecipeInputChange} id="recipe-search" type="text"
                   placeholder="Search..." value={search}></input>
        </div>
    );
};

export default RecipeSearch;