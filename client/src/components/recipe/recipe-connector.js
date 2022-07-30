import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RecipesComponent from "./Recipe";

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(RecipesComponent);
