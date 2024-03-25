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

export const fetchRegistrarAsync = (registrar, toast) => {
  return async (dispatch, getState) => {
    try {
      if (getState().registrar.isFetched) return;
      const data = await getRegistrarDashboard(registrar);
      dispatch(fetchRegistrar(data));
      toast.success("Successfully fetched registrar data");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch registrar data");
    }
  };
};

export const updateRegistrarAsync = (registrar, toast) => {
  return async (dispatch) => {
    try {
      toast.info("Updating registrar data");
      const response = await updateRegistrarUtils(registrar);
      dispatch(updateRegistrar(response));
      toast.success("Successfully updated registrar data");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update registrar data");
    }
  };
};
