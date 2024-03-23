import axiosInstance from "./axiosInstance";

export const getAllCourt = async () => {
  try {
    const response = await axiosInstance.get("/util/court");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
