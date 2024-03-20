// all reducers are combined here
import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  // all reducers are combined here
  auth: authReducer,
});

export default rootReducer;
