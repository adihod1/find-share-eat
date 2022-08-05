import {connect} from "react-redux";
import RecipeFiltersComponent from "./recipe-filters-component";
import {bindActionCreators} from "redux";

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(RecipeFiltersComponent);
