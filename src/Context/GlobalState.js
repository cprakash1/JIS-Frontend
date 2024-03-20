import React, { useContext, createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { convertWithPublicKey } from "../Helper/ConvertWithPublicKey";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://127.0.0.1:3001";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

const initialState = {
  loginToken: null,
  userType: "registrar",
  id: null,
  name: null,
  email: null,
  error: null,
  phone: null,
  address: null,
  court: null,
  cases: [],
  casesSeen: [],
  schedule: [],
  history: [],
  paymentLeft: 0,
  paymentHistory: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAllCourt = async () => {
    try {
      const response = await axiosInstance.get("/util/court");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        getAllCourt,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
