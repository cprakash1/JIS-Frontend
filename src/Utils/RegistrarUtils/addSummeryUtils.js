import axiosInstance from "../MainUtils/axiosInstance";

export const addSummeryUtils = async (data, toast) => {
  try {
    toast.info("Adding Summery...");
    const response = await axiosInstance.post("/registrar/add-summery", data);
    toast.success("Successfully added Summery");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to add Summery");
  }
};
