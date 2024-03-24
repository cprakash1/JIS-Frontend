import axiosInstance from "../MainUtils/axiosInstance";

export const lawyerCaseView = async (dataToSend) => {
  try {
    const response = await axiosInstance.post("/lawyer/case-view", dataToSend);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
