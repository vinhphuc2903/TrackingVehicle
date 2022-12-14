"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGetUser = exports.handleDailyReport = exports.handleRegisterApi = exports.handleLoginApi = void 0;

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleLoginApi = function handleLoginApi(username, password) {
  return _axios["default"].post("/api/Identity/login", {
    username: username,
    password: password
  });
};

exports.handleLoginApi = handleLoginApi;

var handleRegisterApi = function handleRegisterApi(data) {
  return _axios["default"].post("/api/Identity/register", data);
};

exports.handleRegisterApi = handleRegisterApi;

var handleDailyReport = function handleDailyReport(date) {
  return _axios["default"].get("/api/Position/Daily-Report?date=".concat(date));
};

exports.handleDailyReport = handleDailyReport;

var handleGetUser = function handleGetUser() {
  return _axios["default"].get("/api/Identity/get-user");
};

exports.handleGetUser = handleGetUser;