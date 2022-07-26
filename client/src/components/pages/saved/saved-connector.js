import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Saved from './saved-component';
import { getRecipeListValue } from '../../../app/selectors/recipe-list-selectors'
import { getLoginUser } from '../../../app/selectors/login-selectors'
import { fetchRecipesByUserIdAction } from "../../../app/actions/recipe-list-actions";

const mapStateToProps = (state, ownProps) => {
    const recipesValue = getRecipeListValue(state);
    const user = getLoginUser(state)
    return { recipesValue, user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ fetchRecipesByUserIdAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);