import axiosInstance from "../MainUtils/axiosInstance";

export const getDates = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/get-schedule",
      dataToSend
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const assignDate = async (dataToSend) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/date-selected",
      dataToSend
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
