import axiosInstance from "../MainUtils/axiosInstance";

export const updateRegistrarUtils = async (registrarData) => {
  try {
    const response = await axiosInstance.post(
      `/registrar/update-registrar`,
      registrarData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
