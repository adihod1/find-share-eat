import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLoginAction } from "../../../app/actions/login-actions";
import { getLoginUser } from "../../../app/selectors/login-selectors";
import { getChosenCategory } from "../../../app/selectors/form-entities-selectors";
import RecipeForm from "./RecipeForm";

const mapStateToProps = (state, ownProps) => {
  const userValue = getLoginUser(state);
  const userCategory = getChosenCategory(state);
  console.log({ userValue, userCategory });
  return { userValue, userCategory };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ userLoginAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
