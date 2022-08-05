import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getRecipeListValue} from "../../app/selectors/recipe-list-selectors";
import {fetchRecipesAction} from "../../app/actions/recipe-list-actions";
import RecipesListComponent from "./recipe-list-component";
import {getRecipeByIngredientArray} from "../../app/selectors/recipe-by-ingredient-selectors";
import {getRecipeSearchValue} from "../../app/selectors/recipe-search-selectors";
import {getSortByObject} from "../../app/selectors/recipe-sort-by-selectors";
import {getRecipeByCategoryArray} from "../../app/selectors/recipe-by-category-selectors";

const mapStateToProps = (state, ownProps) => {
    const recipesValue = getRecipeListValue(state);
    const ingredientsFilterValue = getRecipeByIngredientArray(state);
    const searchFilterValue = getRecipeSearchValue(state);
    const sortFilterValue = getSortByObject(state);
    const categoriesFilterValue = getRecipeByCategoryArray(state);
    return {recipesValue, ingredientsFilterValue, searchFilterValue, sortFilterValue, categoriesFilterValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({fetchRecipesAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListComponent);
