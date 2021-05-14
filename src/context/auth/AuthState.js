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

const AuthState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //registerCraftMan
  const registerCraftMan = async (userData) => {
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
    } catch (err) {
      dispatch({
        type: FAIL_REGISTER,
        payload: err.response.data,
      });
    }
  };

  //loginCraftMan
  const loginCraftMan = async (userData) => {
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
    } catch (err) {
      dispatch({
        type: FAIL_LOGIN,
        payload: err.response.data,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        registerCraftMan,
        loginCraftMan,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
