import axiosInstance from "../MainUtils/axiosInstance";

export const getRegistrarDashboard = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-complete-details",
      dataToSend
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
