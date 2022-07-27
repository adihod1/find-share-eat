import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HomeComponent from "./home-component";

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
