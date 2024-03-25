import axiosInstance from "../MainUtils/axiosInstance";

export const updateCourt = async (court, toast) => {
  try {
    toast.info("Updating court");
    const response = await axiosInstance.post("/registrar/update-court", court);
    toast.success("Successfully updated court");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to update court");
  }
};
