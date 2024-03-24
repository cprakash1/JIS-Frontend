import axiosInstance from "../MainUtils/axiosInstance";

export const addLawyerPaymentUtils = async (data) => {
  try {
    const response = await axiosInstance.post("/lawyer/payment", data);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
