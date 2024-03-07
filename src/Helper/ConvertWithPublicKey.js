import jwt from "./Jwt";

export const convertWithPublicKey = async (data) => {
  return await jwt.generateToken(data);
};
