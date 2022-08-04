import {connect} from "react-redux";
import RecipeSortByComponent from "./recipe-sort-by-component";
import {bindActionCreators} from "redux";
import {setSortBy} from "../../../app/actions/recipe-sort-by-actions";
import {getSortByObject} from "../../../app/selectors/recipe-sort-by-selectors";

const mapStateToProps = (state, ownProps) => {
    const sortByObject = getSortByObject(state);
    return {sortByObject};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({setSortBy}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSortByComponent);
