import axiosInstance from "../MainUtils/axiosInstance";

export const getPendingCases = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-pending-cases",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
