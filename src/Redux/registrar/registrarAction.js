import { getRegistrarDashboard } from "../../Utils/RegistrarUtils/getRegistrarDashboard";
import { updateRegistrarUtils } from "../../Utils/RegistrarUtils/updateRegistrarUtils";
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

export const updateRegistrarAsync = (registrar) => {
  return async (dispatch) => {
    try {
      const response = await updateRegistrarUtils(registrar);
      dispatch(updateRegistrar(response));
    } catch (error) {
      console.error(error);
    }
  };
};
