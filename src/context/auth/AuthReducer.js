import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LIST_USERS_SUCCESS,
  LIST_USERS_FAIL,
} from "./types.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        userAuth: true,
        errors: null,
      };

    case FAIL_LOGIN:
    case FAIL_REGISTER:
      return {
        ...state,
        userAuth: null,
        errors: action.payload,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        userAuth: true,
        user: action.payload,
        errors: null,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        userAuth: null,
        user: null,
        errors: action.payload,
      };
    case LIST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case LIST_USERS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
