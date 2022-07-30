import formEntities from "./form-entities-reducer";
import { combineReducers } from "redux";
import login from "./login-reducer";
import spinner from "./spinner-reducer";

const allReducers = combineReducers({
  login,
  spinner,
  formEntities,
});
export default allReducers;
