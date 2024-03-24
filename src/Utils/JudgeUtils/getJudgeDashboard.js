import axiosInstance from "../MainUtils/axiosInstance";

export const getJudgeDashboard = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/judge/get-complete-details",
      dataToSend
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
