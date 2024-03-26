import axiosInstance from "../MainUtils/axiosInstance";

export const registrarCloseCase = async (caseId) => {
  try {
    const response = await axiosInstance.post("/registrar/close-case", caseId);
    return response;
  } catch (error) {
    throw error;
  }
};
