import {
  FETCH_REGISTRAR,
  DELETE_REGISTRAR,
  UPDATE_REGISTRAR,
} from "./registrarTypes";

const initialState = {
  isFetched: false,
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  court: {},
};

const registrarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTRAR:
      return {
        ...state,
        isFetched: true,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
      };
    case DELETE_REGISTRAR:
      return {
        ...state,
        isFetched: false,
        id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        court: {},
      };
    case UPDATE_REGISTRAR:
      return {
        ...state,
        isFetched: true,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        court: action.payload.court,
      };
    default:
      return state;
  }
};

export default registrarReducer;
