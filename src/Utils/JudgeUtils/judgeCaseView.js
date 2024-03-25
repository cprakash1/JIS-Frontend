import axiosInstance from "../MainUtils/axiosInstance";

export const judgeCaseView = async (dataToSend) => {
  try {
    const response = await axiosInstance.post("/judge/case-view", dataToSend);
    return response.data;
  } catch (error) {
    throw error;
  }
};
