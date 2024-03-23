import axiosInstance from "../MainUtils/axiosInstance";

export const updateLawyerUtils = async (lawyer) => {
  try {
    const response = await axiosInstance.post("/lawyer/update", lawyer);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
