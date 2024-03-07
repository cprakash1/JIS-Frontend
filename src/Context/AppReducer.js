export default (state, action) => {
  switch (action.type) {
    case "LOGIN_REGISTRAR":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court ? action.payload.court : null,
        loginToken: action.payload.loginToken,
      };
    case "LOGIN_JUDGE":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
        cases: action.payload.cases,
        casesSeen: action.payload.casesSeen,
        schedule: action.payload.schedule,
        history: action.payload.history,
        loginToken: action.payload.loginToken,
      };
    case "LOGIN_LAWYER":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
        cases: action.payload.cases,
        casesSeen: action.payload.casesSeen,
        schedule: action.payload.schedule,
        history: action.payload.history,
        paymentLeft: action.payload.paymentLeft,
        paymentHistory: action.payload.paymentHistory,
        loginToken: action.payload.loginToken,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_USERTYPE":
      return {
        ...state,
        userType: action.payload,
      };
    default:
      return state;
  }
};
