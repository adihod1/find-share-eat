import {combineReducers} from "redux";
import spinner from "./spinner-reducer";

const allReducers = combineReducers({
    spinner,
});
export default allReducers;