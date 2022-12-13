"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = _interopRequireDefault(require("lodash"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import config from "./config";
var instance = _axios["default"].create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    XApiKey: "S4R13E7?J5bjp7{!CZMADnGwhC8FGZZ2p5MBH0qk",
    // Authorization: `Bearer ${Cookies.get("token")?.replace(
    //   '"',
    //   ""
    // )}?.replace('"','')`,
    Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJsb25nIiwiRmlyc3ROYW1lIjoic3RyaW5nIiwiTGFzdE5hbWUiOiJzdHJpbmciLCJBdmF0YXJVcmwiOiIiLCJnZW5kZXIiOiJNYWxlIiwiYmlydGhkYXRlIjoiMTIvMTMvMjAyMiAwNDowMjowOSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYmYiOjE2NzA5MzQ0OTUsImV4cCI6MTY3MTAyMDg5NSwiaWF0IjoxNjcwOTM0NDk1fQ.6DHUEAEokHaWOMuFIuV5SOYRLUSc_zDtE_5fhmeZic2qfedkvewcOayGnAfID_dsedUsazTlGXOFgj2aC73hdA"
  }
}); // gọi api thành công chỉ trả về response.data


instance.interceptors.response.use(function (response) {
  var data = response.data;
  return response.data;
});
var _default = instance;
exports["default"] = _default;