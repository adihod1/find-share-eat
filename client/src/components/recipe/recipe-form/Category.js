import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../../../app/actions/form-actions";
import { getCategoriesList } from "../../../app/selectors/form-entities-selectors";

function Category({ editMode, recipe, categoriesList, getCategories }) {
  // const [selectCategory, setSelectCategory] = useState(
  //   editMode ? recipe[0].category.name : categories[0].title
  // );

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const loadCategories = useCallback(async () => {
    console.log("categoriess");
    await getCategories();
  }, [getCategories]);

  useEffect(() => {
    setIsLoading(true);
    loadCategories();
    setIsLoading(false);
  }, []);

  return (
    // <select>
    //   {categoriesList.map((category) => (
    //     <option value={category.categoryName}>{category.categoryName}</option>
    //   ))}
    // </select>
    <div>{categoriesList}hello</div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const categoriesList = getCategoriesList(state);

  return { categoriesList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getCategories,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
