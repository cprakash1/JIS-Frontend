import axiosInstance from "../MainUtils/axiosInstance";

export const getDates = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-schedule",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const assignDate = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/date-selected",
      dataToSend
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
