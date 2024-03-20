import axiosInstance from "./axiosInstance";

export const registerLawyer = async (lawyer) => {
  try {
    const response = await axiosInstance.post(
      "/registrar/register-lawyer",
      lawyer
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
