import {
  FETCH_JUDGE,
  UPDATE_JUDGE,
  DELETE_JUDGE,
  ADD_CASES_SEEN,
} from "./judgeTypes";

const initialState = {
  isFetched: false,
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  court: {},
  cases: [],
  schedule: [],
  casesSeen: [],
  history: [],
};

const judgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JUDGE:
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
        schedule: action.payload.schedule,
        casesSeen: action.payload.casesSeen,
        history: action.payload.history,
      };
    case UPDATE_JUDGE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
      };
    case DELETE_JUDGE:
      return initialState;
    case ADD_CASES_SEEN:
      return {
        ...state,
        casesSeen: [...state.casesSeen, action.payload],
      };
    default:
      return state;
  }
};

export default judgeReducer;
