import axiosInstance from "../MainUtils/axiosInstance";

export const registerJudge = async (judge) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-judge",
      judge
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
