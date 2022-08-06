import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Profile from "./Profile";
import { getLoginUser } from "../../../app/selectors/login-selectors";

const mapStateToProps = (state, ownProps) => {
    const user = getLoginUser(state);
    return { user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
