import { addLawyerPaymentUtils } from "../../Utils/LawyerUtils/addLawyerPayment.utils";
import { getLawyerDashboard } from "../../Utils/LawyerUtils/getLawyerDashboard";
import { updateLawyerUtils } from "../../Utils/LawyerUtils/updateLawyerUtils";
import {
  FETCH_LAWYER,
  DELETE_LAWYER,
  UPDATE_LAWYER,
  ADD_LAWYER_PAYMENT,
  ADD_CASES_SEEN,
} from "./lawyerTypes";

export const fetchLawyer = (lawyer) => {
  return {
    type: FETCH_LAWYER,
    payload: lawyer,
  };
};

export const deleteLawyer = () => {
  return {
    type: DELETE_LAWYER,
  };
};

export const updateLawyer = (lawyer) => {
  return {
    type: UPDATE_LAWYER,
    payload: lawyer,
  };
};

export const addLawyerPayment = (lawyer) => {
  return {
    type: ADD_LAWYER_PAYMENT,
    payload: lawyer,
  };
};

export const addCasesSeen = (lawyer) => {
  return {
    type: ADD_CASES_SEEN,
    payload: lawyer,
  };
};

export const fetchLawyerAsync = (dataToSend) => {
  return async (dispatch, getState) => {
    if (getState().lawyer.isFetched) return;
    const data = await getLawyerDashboard(dataToSend);
    console.log(data, "data");
    dispatch(fetchLawyer(data));
  };
};

export const addLawyerPaymentAsync = (dataToSend) => {
  return async (dispatch) => {
    try {
      const data = await addLawyerPaymentUtils(dataToSend);
      console.log(data, "data");
      dispatch(addLawyerPayment(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateLawyerAsync = (lawyer) => {
  return async (dispatch) => {
    try {
      const data = await updateLawyerUtils(lawyer);
      console.log(data, "data");
      dispatch(updateLawyer(data));
    } catch (error) {
      console.log(error);
    }
  };
};
