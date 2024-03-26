import axiosInstance from "../MainUtils/axiosInstance";

export const registerCase = async (caseData, toast) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-case",
      caseData
    );
    toast.success("Case Registered");
    return response.data;
  } catch (error) {
    throw error;
  }
};
