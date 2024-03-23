import axiosInstance from "../MainUtils/axiosInstance";

export const registerJudge = async (judge) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-judge",
      judge
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
