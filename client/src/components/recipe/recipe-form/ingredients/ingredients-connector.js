import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addIngredients } from "../../../../app/actions/form-actions";
import {
  getChosenQuantity,
  getChosenMeasurement,
  getChosenIngredient,
} from "../../../../app/selectors/form-entities-selectors";
import Ingredients from "./Ingredients";

const mapStateToProps = (state, ownProps) => {
  const quantityUserInput = getChosenQuantity(state);
  const chosenUserMeasurement = getChosenMeasurement(state);
  const chosenUserIngredient = getChosenIngredient(state);
  console.log("conncetor", categoriesList);
  return {
    quantityUserInput,
    chosenUserMeasurement,
    chosenUserIngredient,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      addIngredients,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
