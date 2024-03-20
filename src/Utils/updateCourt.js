import axiosInstance from "./axiosInstance";

export const updateCourt = async (court) => {
  try {
    const response = await axiosInstance.post("/registrar/update-court", court);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
