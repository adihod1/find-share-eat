import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SidebarComponent from "./sidebar-component";
import {getLoginIsLoggedIn, getLoginUser} from "../../app/selectors/login-selectors";
import {userLogoutAction} from "../../app/actions/login-actions";

const mapStateToProps = (state, ownProps) => {
    const userValue = getLoginUser(state);
    const isLoggedInValue = getLoginIsLoggedIn(state);
    return {userValue, isLoggedInValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({userLogoutAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
