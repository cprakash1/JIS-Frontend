import axiosInstance from "../MainUtils/axiosInstance";

export const getJudgeLawyer = async (dataToSend, toast) => {
  try {
    const response = await axiosInstance.post("/util/judge-lawyer", dataToSend);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Error Fetching Judge Lawyer");
  }
};
