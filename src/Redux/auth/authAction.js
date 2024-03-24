import { SET_USER_TYPE, SET_ERROR_MESSAGE } from "./authTypes";
import { userTypeSelector } from "./authSelector";

export const setUserType = (userType) => {
  return {
    type: SET_USER_TYPE,
    payload: userType,
  };
};
export const setErrorMessage = (error) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: error,
  };
};

export const login = (user) => {
  return async (dispatch, getState) => {
    try {
      if (user.email === "" || user.password === "") {
        dispatch(setErrorMessage("Please enter email and password"));
        return;
      }
      console.log(getState());
      const userType = userTypeSelector(getState());
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/${userType}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: data,
        });
      } else {
        dispatch(setErrorMessage(data.error));
      }
    } catch (error) {
      console.log(error);
      dispatch(setErrorMessage(error.message));
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
