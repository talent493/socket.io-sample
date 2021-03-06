import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userState = {};

export const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS: {
      console.log("success on reducer")
      return { loading: false, ...action.payload };
    }
    case USER_LOGIN_FAIL: {
      console.log("failed on reducer")
      return { loading: false, auth:false };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("userToken");
      return { loading: false };
    }
    default:
      return state;
  }
};
