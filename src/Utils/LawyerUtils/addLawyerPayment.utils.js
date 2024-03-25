import axiosInstance from "../MainUtils/axiosInstance";

export const addLawyerPaymentUtils = async (data) => {
  try {
    const response = await axiosInstance.post("/lawyer/payment", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
