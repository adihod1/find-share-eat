import {connect} from "react-redux";
import RecipeSearchComponent from "./recipe-search-component";
import {bindActionCreators} from "redux";
import {setRecipeSearchAction} from "../../../app/actions/recipe-search-actions";
import {getRecipeSearchValue} from "../../../app/selectors/recipe-search-selectors";

const mapStateToProps = (state, ownProps) => {
    const recipeSearchValue = getRecipeSearchValue(state);
    return {recipeSearchValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({setRecipeSearchAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchComponent);
