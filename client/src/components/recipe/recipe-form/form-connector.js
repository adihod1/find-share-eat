import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLoginAction } from "../../../app/actions/login-actions";
import {
  addIngredients,
  addInstructions,
  addUserRecipe,
  addCookTime,
} from "../../../app/actions/form-actions";
import { getLoginUser } from "../../../app/selectors/login-selectors";
import {
  getChosenCategory,
  getChosenIngredients,
  getUserInstructions,
  getUserCookTime,
} from "../../../app/selectors/form-entities-selectors";
import RecipeForm from "./RecipeForm";

const mapStateToProps = (state, ownProps) => {
  const userValue = getLoginUser(state);
  const userCategory = getChosenCategory(state);
  const userIngredients = getChosenIngredients(state);
  const userInstructions = getUserInstructions(state);
  const userCookingTime = getUserCookTime(state);
  console.log({ userValue, userCategory, userIngredients });
  return {
    userValue,
    userCategory,
    userIngredients,
    userInstructions,
    userCookingTime,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      userLoginAction,
      addIngredients,
      addInstructions,
      addCookTime,
      addUserRecipe,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
