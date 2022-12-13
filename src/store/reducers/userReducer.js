import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  dailyReport: [],
  userObj: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      console.log("ss", action);
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case actionTypes.FETCH_DAILY_REPORT_SUCCESS:
      state.dailyReport = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_DAILY_REPORT_FAILED:
      state.dailyReport = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_INFOR_USER_SUCCESS:
      console.log("check ss", action);
      state.userObj = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_INFOR_USER_FAILED:
      console.log("check f", action);
      state.userObj = {};
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
