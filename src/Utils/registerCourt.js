import axiosInstance from "./axiosInstance";

export const registerCourt = async (court) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-court",
      court
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
