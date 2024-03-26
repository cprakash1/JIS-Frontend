import axiosInstance from "../MainUtils/axiosInstance";

export const updateRegistrarUtils = async (registrarData) => {
  try {
    const response = await axiosInstance.post(
      `/registrar/update-registrar`,
      registrarData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
