import { JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../auth/types";

export default (state, action) => {
  switch (action.type) {
    case JOB_LIST_SUCCESS:
      return {
        ...state,
        Jobs: action.payload,
        loading: false,
      };
    case JOB_LIST_FAIL:
      return {
        errors: action.payload,
      };
    default:
      return state;
  }
};
