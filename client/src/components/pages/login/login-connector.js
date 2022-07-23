import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LoginComponent from "./login-component";
import {userLoginAction, userLogoutAction} from "../../../app/actions/login-actions";
import {getLoginIsLoggedIn, getLoginUser} from "../../../app/selectors/login-selectors";

const mapStateToProps = (state, ownProps) => {
    const userValue = getLoginUser(state);
    const isLoggedInValue = getLoginIsLoggedIn(state);
    return {userValue, isLoggedInValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({userLoginAction, userLogoutAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
