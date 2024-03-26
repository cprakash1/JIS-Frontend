import axiosInstance from "../MainUtils/axiosInstance";

export const todayCase = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-today-cases",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
