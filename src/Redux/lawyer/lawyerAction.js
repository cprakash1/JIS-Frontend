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

export const fetchLawyerAsync = (dataToSend, toast) => {
  return async (dispatch, getState) => {
    try {
      if (getState().lawyer.isFetched) return;
      toast.info("Fetching Lawyer Data");
      const data = await getLawyerDashboard(dataToSend);
      dispatch(fetchLawyer(data));
      toast.success("Fetched Lawyer Data");
    } catch (error) {
      console.log(error);
      toast.error("Error Fetching Lawyer Data");
    }
  };
};

export const addLawyerPaymentAsync = (dataToSend, toast) => {
  return async (dispatch) => {
    try {
      const data = await addLawyerPaymentUtils(dataToSend);
      dispatch(addLawyerPayment(data));
      toast.success("Payment Successful");
    } catch (error) {
      toast.error("Payment Failed");
      console.log(error);
    }
  };
};

export const updateLawyerAsync = (lawyer, toast) => {
  return async (dispatch) => {
    try {
      toast.info("Updating Lawyer Data");
      const data = await updateLawyerUtils(lawyer);
      dispatch(updateLawyer(data));
      toast.success("Updated Lawyer Data");
    } catch (error) {
      console.log(error);
      toast.error("Error Updating Lawyer Data");
    }
  };
};
