import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

import {
  handleRegisterApi,
  handleDailyReport,
  handleGetUser,
} from "../../services/userService";
export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});
export const userLoginSucces = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});

export const registerService = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await handleRegisterApi(data);
      if (
        res &&
        res.result &&
        res.result.results &&
        res.result.results.Success === true
      ) {
        toast.success("Đănhg kí tài khoản thành công!");
        dispatch(registerServiceSuccess());
      } else {
        dispatch(registerServiceFail());
      }
    } catch (error) {
      dispatch(registerServiceFail());
      console.log("registerServiceFail:", error);
    }
  };
};

export const registerServiceSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});

export const registerServiceFail = () => ({
  type: actionTypes.REGISTER_FAILED,
});

export const dailyReportService = (date) => {
  return async (dispatch, getState) => {
    try {
      let res = await handleDailyReport(date);
      if (res && res.code === "ok") {
        dispatch(handleDailyReportSuccess(res.result));
      } else {
        dispatch(handleDailyReportFail());
      }
    } catch (error) {
      dispatch(handleDailyReportFail());
      console.log("handleDailyReportFail:", error);
    }
  };
};

export const handleDailyReportSuccess = (data) => ({
  type: actionTypes.FETCH_DAILY_REPORT_SUCCESS,
  data: data,
});

export const handleDailyReportFail = () => ({
  type: actionTypes.FETCH_DAILY_REPORT_FAILED,
});

export const fetchUserService = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetUser();
      if (res && res.code === "ok") {
        dispatch(handleGetUserSuccess(res.result));
      } else {
        dispatch(handleGetUserFail());
      }
    } catch (error) {
      dispatch(handleGetUserFail());
      console.log("handleGetUserFail:", error);
    }
  };
};

export const handleGetUserSuccess = (data) => ({
  type: actionTypes.FETCH_INFOR_USER_SUCCESS,
  data: data,
});

export const handleGetUserFail = () => ({
  type: actionTypes.FETCH_INFOR_USER_FAILED,
});
