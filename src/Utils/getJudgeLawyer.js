import axiosInstance from "./axiosInstance";

export const getJudgeLawyer = async (dataToSend) => {
  try {
    const response = await axiosInstance.post("/util/judge-lawyer", dataToSend);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
