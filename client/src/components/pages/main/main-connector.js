import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MainComponent from "./main-component";
import {userLoginAction} from "../../../app/actions/login-actions";
import {getLoginIsLoggedIn} from "../../../app/selectors/login-selectors";

const mapStateToProps = (state, ownProps) => {
    const isLoggedInValue = getLoginIsLoggedIn(state);
    return {isLoggedInValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({userLoginAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
