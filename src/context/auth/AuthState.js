import React, { useReducer, createContext } from "react";
import axios from "axios";
import authReducer from "./AuthReducer";

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL, 
  LIST_USERS_SUCCESS,
  LIST_USERS_FAIL,
  USER_LOGOUT
} from "../types";

const url = "https://services-works.herokuapp.com/api/auth";

export const AuthContext = createContext();

const AuthState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null,
    user : null,
    users :[]
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

   const getUserData=async()=>{
    try {
      const res = await axios.get(`${url}//user`);
      console.log(res); 
      dispatch({
        type :LOAD_USER_SUCCESS,
        payload : res.data.user
      })
    } catch (error) {
      console.log(error);
      dispatch({ type: LOAD_USER_FAIL, payload: error.message });
    }
  } 
  //registerCraftMan
  const registerCraftMan = async (userData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/register-provider`, userData, config);
      // console.log(res);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL_REGISTER,
        payload: err.response.data,
      });
      console.log(err);
    }
  };

    //registerCraftMan
    const registerClient = async (userData) => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post(`${url}/register-user`, userData, config);
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
        console.log(err);
      }
    };

  //loginCraftMan
  const login = async (userData) => {
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
      getUserData()
    } catch (err) {
      dispatch({
        type: FAIL_LOGIN,
        payload: err.response.data,
      });
    }
  };

  const getUsersViaJobID=async(id)=>{
    try {
      const res = await axios.post(`${url}/${id}`);
      dispatch({
        type: LIST_USERS_SUCCESS,
        payload: res.data.users,
      });
    } catch (error) {
      dispatch({
        type: LIST_USERS_FAIL,
        payload: error.message
      });
    }
  }

   const logout =()=> {
     dispatch({ type: USER_LOGOUT });
     localStorage.removeItem("token");
      document.location.href = "/login";
  };
  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        user : state.user,
        errors: state.errors,
        users : state.users,
        registerCraftMan,
        login,
        registerClient,
        getUserData,
        getUsersViaJobID,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
