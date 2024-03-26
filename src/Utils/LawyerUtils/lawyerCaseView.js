import axiosInstance from "../MainUtils/axiosInstance";

export const lawyerCaseView = async (dataToSend) => {
  try {
    const response = await axiosInstance.post("/lawyer/case-view", dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
};
