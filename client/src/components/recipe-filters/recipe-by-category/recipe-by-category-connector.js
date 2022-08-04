import {connect} from "react-redux";
import RecipeByIngredientComponent from "./recipe-by-category-component";
import {bindActionCreators} from "redux";
import {
    getRecipeByCategoriesOptions,
    getRecipeByCategoryArray
} from "../../../app/selectors/recipe-by-category-selectors";
import {getAllCategoriesAction, setSelectedCategoriesAction} from "../../../app/actions/recipe-by-category-actions";

const mapStateToProps = (state, ownProps) => {
    const selectedCategoriesValue = getRecipeByCategoryArray(state);
    const allCategoriesValue = getRecipeByCategoriesOptions(state);
    return {selectedCategoriesValue, allCategoriesValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getAllCategoriesAction, setSelectedCategoriesAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeByIngredientComponent);
