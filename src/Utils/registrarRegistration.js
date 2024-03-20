import axiosInstance from "./axiosInstance";

export const registrarRegistration = async (registrar) => {
  try {
    const response = await axiosInstance.post("/registrar/register", registrar);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
