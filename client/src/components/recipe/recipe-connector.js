import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RecipesComponent from "./Recipe";
import { userLoginAction } from "../../app/actions/login-actions";
import {
  addLikeToRecipe,
  removeLikeToRecipe,
} from "../../app/actions/recipe-like-actions";
import { getLoginUser } from "../../app/selectors/login-selectors";
import { getLikeList } from "../../app/selectors/like-selectors";

const mapStateToProps = (state, ownProps) => {
  const userValue = getLoginUser(state);
  // const recipeLikes = getLikeList(state);
  console.log({ userValue });
  return {
    userValue,
    // recipeLikes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addLikeToRecipe, removeLikeToRecipe }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesComponent);
