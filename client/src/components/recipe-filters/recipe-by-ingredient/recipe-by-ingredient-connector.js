import {connect} from "react-redux";
import RecipeByIngredientComponent from "./recipe-by-ingredient-component";
import {bindActionCreators} from "redux";
import {
    getRecipeByIngredientArray,
    getRecipeByIngredientsOptions
} from "../../../app/selectors/recipe-by-ingredient-selectors";
import {getAllIngredientsAction, setRecipeByIngredientAction} from "../../../app/actions/recipe-by-ingredient-actions";

const mapStateToProps = (state, ownProps) => {
    const recipeByIngredientArray = getRecipeByIngredientArray(state);
    const allIngredientsValue = getRecipeByIngredientsOptions(state);
    return {recipeByIngredientArray, allIngredientsValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({setRecipeByIngredientAction, getAllIngredientsAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeByIngredientComponent);
