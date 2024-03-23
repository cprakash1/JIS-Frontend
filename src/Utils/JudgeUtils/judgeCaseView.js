import axiosInstance from "../MainUtils/axiosInstance";

export const judgeCaseView = async (dataToSend) => {
  try {
    const response = await axiosInstance.post("/judge/case-view", dataToSend);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
