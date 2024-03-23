import {
  FETCH_LAWYER,
  UPDATE_LAWYER,
  DELETE_LAWYER,
  ADD_LAWYER_PAYMENT,
  ADD_CASES_SEEN,
} from "./lawyerTypes";

const initialState = {
  isFetched: false,
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  court: {},
  cases: [],
  paymentLeft: 0,
  paymentHistory: [],
  schedule: [],
  casesSeen: [],
  history: [],
};

const lawyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAWYER:
      return {
        ...state,
        isFetched: true,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
        cases: action.payload.cases,
        paymentLeft: action.payload.paymentLeft,
        paymentHistory: action.payload.paymentHistory,
        schedule: action.payload.schedule,
        casesSeen: action.payload.casesSeen,
        history: action.payload.history,
      };
    case UPDATE_LAWYER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
      };
    case DELETE_LAWYER:
      return initialState;
    case ADD_LAWYER_PAYMENT:
      return {
        ...state,
        paymentLeft:
          state.paymentLeft -
          (action.payload.status === "success" ? action.payload.amount : 0),
        paymentHistory: [
          ...state.paymentHistory,
          {
            ...action.payload,
          },
        ],
      };
    case ADD_CASES_SEEN:
      return {
        ...state,
        casesSeen: [...state.casesSeen, action.payload],
      };
    default:
      return state;
  }
};

export default lawyerReducer;
