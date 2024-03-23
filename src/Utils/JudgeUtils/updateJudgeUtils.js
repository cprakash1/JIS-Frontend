import axiosInstance from "../MainUtils/axiosInstance";

export const updateJudgeUtils = async (judge) => {
  try {
    const response = await axiosInstance.post("/judge/update", judge);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
