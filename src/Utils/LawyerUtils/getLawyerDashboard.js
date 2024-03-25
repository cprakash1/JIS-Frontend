import axiosInstance from "../MainUtils/axiosInstance";

export const getLawyerDashboard = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/lawyer/get-complete-details",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
