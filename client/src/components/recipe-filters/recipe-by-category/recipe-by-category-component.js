import React, {useCallback, useEffect} from "react";
import Select from "react-select";
import "./recipe-by-category.scss";

//@formatter:off
const RecipeByCategory = ({selectedCategoriesValue, allCategoriesValue, setSelectedCategoriesAction, getAllCategoriesAction}) => {
//@formatter:on

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            padding: 20,
        }),

        control: (_, {selectProps: {width}}) => ({
            width: width
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return {...provided, opacity, transition};
        }
    }

    useEffect(() => {
        getAllCategoriesAction()
    }, [setSelectedCategoriesAction])

    const changeCategory = useCallback(selected => {
        setSelectedCategoriesAction(selected);
    }, []);

    return (
        <Select isMulti={true} defaultValue={selectedCategoriesValue} options={allCategoriesValue}
                id="select-category"
                className="select-category"
                placeholder="select categories"
                onChange={changeCategory}/>
    );
};

export default RecipeByCategory;