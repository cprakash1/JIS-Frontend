// all reducers are combined here
import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import registrarReducer from "./registrar/registrarReducer";
import lawyerReducer from "./lawyer/lawyerReducer";
import judgeReducer from "./judge/judgeReducer";

const rootReducer = combineReducers({
  // all reducers are combined here
  auth: authReducer,
  registrar: registrarReducer,
  lawyer: lawyerReducer,
  judge: judgeReducer,
});

export default rootReducer;
