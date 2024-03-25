import axiosInstance from "../MainUtils/axiosInstance";

export const updateLawyerUtils = async (lawyer) => {
  try {
    const response = await axiosInstance.post("/lawyer/update", lawyer);
    return response.data;
  } catch (error) {
    throw error;
  }
};
