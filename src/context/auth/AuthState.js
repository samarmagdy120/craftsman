import React, { useReducer, createContext } from "react";
import axios from "axios";
import authReducer from "./AuthReducer";

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
} from "./types";

const url = "https://services-works.herokuapp.com/api/auth";

export const AuthContext = createContext();

const initialState = {
  userAuth: null,
  errors: null,
};

export const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  //regiister user

  const registerUser = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/register`, userData, config);
      console.log(res);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_REGISTER,
        payload: error.response.data,
      });
    }
  };

  //login user

  const loginUser = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/login`, userData, config);
      console.log(res);

      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_LOGIN,
        payload: error.response.data,
      });
    }
  };
  return (
    <AuthContext.provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </AuthContext.provider>
  );
};
