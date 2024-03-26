import axiosInstance from "./axiosInstance";

export const getAllCourt = async (toast) => {
  try {
    const response = await axiosInstance.get("/util/court");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch court data");
  }
};
