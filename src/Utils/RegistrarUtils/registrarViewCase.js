import axiosInstance from "../MainUtils/axiosInstance";

export const registrarCaseView = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/case-view",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
