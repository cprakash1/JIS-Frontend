import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create the toast context
const ToastContext = createContext();

// Custom hook to access the toast context
export const useToast = () => useContext(ToastContext);

// Toast Provider component
const ToastProvider = ({ children }) => {
  // Define function to show toast
  const showToast = (message, options) => {
    toast(message, options);
  };
  const error = (message) => {
    toast.error(message);
  };
  const success = (message) => {
    toast.success(message);
  };
  const warning = (message) => {
    toast.warning(message);
  };
  const info = (message) => {
    toast.info(message);
  };

  // Value to be provided by the context
  const toastValue = {
    toast: {
      showToast,
      error,
      warning,
      success,
      info,
    },
  };

  // Provide the toast context and its value to the children
  return (
    <ToastContext.Provider value={toastValue}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
