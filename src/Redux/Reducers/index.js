import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import projectReduces from "./projectReduces";

const rootReducers = combineReducers({
  auth: AuthReducer,
  project: projectReduces,
});

export default rootReducers;
