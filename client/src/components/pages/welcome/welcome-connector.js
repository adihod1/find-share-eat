import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {openLoginModalAction} from "../../../app/actions/login-actions";
import {getLoginIsLoggedIn, getLoginIsModalOpen, getLoginUser} from "../../../app/selectors/login-selectors";
import WelcomeComponent from "./welcome";

const mapStateToProps = (state, ownProps) => {
    const userValue = getLoginUser(state);
    const isLoggedInValue = getLoginIsLoggedIn(state);
    const isModalOpenValue = getLoginIsModalOpen(state);
    return {userValue, isLoggedInValue, isModalOpenValue};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({openLoginModalAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeComponent);
