import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUserInstructions } from "../../../../app/actions/form-actions";
import { getUserInstructions } from "../../../../app/selectors/form-entities-selectors";
import Instructions from "./Instructions";

const mapStateToProps = (state, ownProps) => {
  const UserInstructions = getUserInstructions(state);

  return {
    UserInstructions,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      addUserInstructions,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
