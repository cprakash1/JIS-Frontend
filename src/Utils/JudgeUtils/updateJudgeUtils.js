import axiosInstance from "../MainUtils/axiosInstance";

export const updateJudgeUtils = async (judge) => {
  try {
    const response = await axiosInstance.post("/judge/update", judge);
    return response.data;
  } catch (error) {
    throw error;
  }
};
