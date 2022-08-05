import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Shared from './shared-component';
import { getUserRecipeListValue } from '../../../app/selectors/recipe-list-selectors'
import { getLoginUser } from '../../../app/selectors/login-selectors'
import { fetchRecipesByUserIdAction } from "../../../app/actions/recipe-list-actions";

const mapStateToProps = (state, ownProps) => {
    const recipesValue = getUserRecipeListValue(state);
    const user = getLoginUser(state)
    return { recipesValue, user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ fetchRecipesByUserIdAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shared);