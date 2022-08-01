import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCategories,
  addCategory,
} from "../../../../app/actions/form-actions";
import {
  getCategoriesList,
  getChosenCategory,
} from "../../../../app/selectors/form-entities-selectors";
import Category from "./Category";

const mapStateToProps = (state, ownProps) => {
  const categoriesList = getCategoriesList(state);
  const chosenCategory = getChosenCategory(state);
  console.log("conncetor", categoriesList);
  return { categoriesList, chosenCategory };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getCategories,
      addCategory,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
