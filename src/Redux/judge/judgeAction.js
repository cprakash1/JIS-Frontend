import { getJudgeDashboard } from "../../Utils/JudgeUtils/getJudgeDashboard";
import {
  FETCH_JUDGE,
  DELETE_JUDGE,
  UPDATE_JUDGE,
  ADD_CASES_SEEN,
} from "./judgeTypes";
import { updateJudgeUtils } from "../../Utils/JudgeUtils/updateJudgeUtils";

export const fetchJudge = (judge) => {
  return {
    type: FETCH_JUDGE,
    payload: judge,
  };
};

export const deleteJudge = () => {
  return {
    type: DELETE_JUDGE,
  };
};

export const updateJudge = (judge) => {
  return {
    type: UPDATE_JUDGE,
    payload: judge,
  };
};

export const addCasesSeen = (caseSeen) => {
  return {
    type: ADD_CASES_SEEN,
    payload: caseSeen,
  };
};

export const fetchJudgeAsync = (dataToSend) => {
  return async (dispatch, getState) => {
    try {
      if (getState().judge.isFetched) return;
      const response = await getJudgeDashboard(dataToSend);
      console.log(response);
      dispatch(fetchJudge(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateJudgeAsync = (dataToSend) => {
  return async (dispatch) => {
    try {
      const response = await updateJudgeUtils(dataToSend);
      console.log(response);
      dispatch(updateJudge(response));
    } catch (error) {
      console.log(error);
    }
  };
};
