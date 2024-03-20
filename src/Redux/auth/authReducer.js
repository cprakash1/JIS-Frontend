import { SET_USER_TYPE, LOGIN, LOGOUT, SET_ERROR_MESSAGE } from "./authTypes";
const initialState = {
  userType: "registrar",
  loginToken: "",
  error: "",
  isLoggedin: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TYPE:
      return {
        ...state,
        error: "",
        loginToken: "",
        isLoggedin: false,
        user: {},
        userType: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        loginToken: action.payload.loginToken,
        user: action.payload.user,
        isLoggedin: true,
      };
    case LOGOUT:
      return {
        ...state,
        loginToken: "",
        user: {},
        error: "",
        isLoggedin: false,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
