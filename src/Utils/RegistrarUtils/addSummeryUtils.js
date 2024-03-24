import axiosInstance from "../MainUtils/axiosInstance";

export const addSummeryUtils = async (data) => {
  try {
    const response = await axiosInstance.post("/registrar/add-summery", data);
    console.log(response.data, "response");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
