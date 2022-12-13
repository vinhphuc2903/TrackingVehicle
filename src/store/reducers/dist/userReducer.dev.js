"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = _interopRequireDefault(require("../actions/actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isLoggedIn: false,
  userInfo: null,
  dailyReport: [],
  userObj: {}
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes["default"].USER_LOGIN_SUCCESS:
      console.log("ss", action);
      return _objectSpread({}, state, {
        isLoggedIn: true,
        userInfo: action.userInfo
      });

    case _actionTypes["default"].USER_LOGIN_FAIL:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        userInfo: null
      });

    case _actionTypes["default"].PROCESS_LOGOUT:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        userInfo: null
      });

    case _actionTypes["default"].FETCH_DAILY_REPORT_SUCCESS:
      state.dailyReport = action.data;
      return _objectSpread({}, state);

    case _actionTypes["default"].FETCH_DAILY_REPORT_FAILED:
      state.dailyReport = [];
      return _objectSpread({}, state);

    case _actionTypes["default"].FETCH_INFOR_USER_SUCCESS:
      console.log("check ss", action);
      state.userObj = action.data;
      return _objectSpread({}, state);

    case _actionTypes["default"].FETCH_INFOR_USER_FAILED:
      console.log("check f", action);
      state.userObj = {};
      return _objectSpread({}, state);

    default:
      return state;
  }
};

var _default = userReducer;
exports["default"] = _default;