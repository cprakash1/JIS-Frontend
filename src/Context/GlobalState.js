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

  async function setUserType(userType) {
    try {
      dispatch({
        type: "SET_USERTYPE",
        payload: userType,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  }

  const login = async (email, password) => {
    try {
      const tokenToSend = await convertWithPublicKey({ email, password });
      const response = await axiosInstance.post(`/${state.userType}/login`, {
        token: tokenToSend,
      });
      if (state.userType === "registrar") {
        dispatch({
          type: "LOGIN_REGISTRAR",
          payload: response.data,
        });
      } else if (state.userType === "judge") {
        dispatch({
          type: "LOGIN_JUDGE",
          payload: response.data,
        });
      } else if (state.userType === "lawyer") {
        dispatch({
          type: "LOGIN_LAWYER",
          payload: response.data,
        });
      } else {
        throw new Error("Invalid user type");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
  const registrarRegistration = async (data) => {
    try {
      const tokenToSend = await convertWithPublicKey(data);
      const response = await axiosInstance.post(`/${state.userType}/register`, {
        token: tokenToSend,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
  const lawyerRegistration = async (data) => {
    try {
      const tokenToSend = await convertWithPublicKey(data);
      const response = await axiosInstance.post(`/${state.userType}/register`, {
        token: tokenToSend,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        login,
        setUserType,
        userType: state.userType,
        registrarRegistration,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
