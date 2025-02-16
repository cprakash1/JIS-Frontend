import axiosInstance from "../MainUtils/axiosInstance";

export const registerCourt = async (court) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-court",
      court
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
