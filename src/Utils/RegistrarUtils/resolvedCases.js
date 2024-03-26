import axiosInstance from "../MainUtils/axiosInstance";

export const resolvedCases = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-ranged-cases",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
