import axiosInstance from "./axiosInstance";

export const searchCase = async (searchQuery, userType) => {
  try {
    if (!userType) {
      throw new Error("User Type not provided");
    }
    const response = await axiosInstance.post(
      `/${userType}/search`,
      searchQuery
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
