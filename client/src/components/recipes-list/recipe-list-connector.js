import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getRecipeListValue} from "../../app/selectors/recipe-list-selectors";
import {fetchRecipesAction} from "../../app/actions/recipe-list-actions";
import RecipesListComponent from "./RecipesList";

const mapStateToProps = (state, ownProps) => {
    const recipesValue = getRecipeListValue(state);
    return {recipesValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({fetchRecipesAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListComponent);
