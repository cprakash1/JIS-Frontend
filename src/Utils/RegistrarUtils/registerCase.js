import axiosInstance from "../MainUtils/axiosInstance";

export const registerCase = async (caseData) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-case",
      caseData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
