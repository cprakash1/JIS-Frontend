import { getRegistrarDashboard } from "../../Utils/RegistrarUtils/getRegistrarDashboard";
import {
  FETCH_REGISTRAR,
  UPDATE_REGISTRAR,
  DELETE_REGISTRAR,
} from "./registrarTypes";

export const fetchRegistrar = (registrar) => {
  return {
    type: FETCH_REGISTRAR,
    payload: registrar,
  };
};

export const updateRegistrar = (registrar) => {
  return {
    type: UPDATE_REGISTRAR,
    payload: registrar,
  };
};

export const deleteRegistrar = () => {
  return {
    type: DELETE_REGISTRAR,
  };
};

export const fetchRegistrarAsync = (registrar) => {
  return async (dispatch, getState) => {
    if (getState().registrar.isFetched) return;
    const data = await getRegistrarDashboard(registrar);
    dispatch(fetchRegistrar(data));
  };
};
