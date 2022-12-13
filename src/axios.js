import axios from "axios";
import _ from "lodash";
import Cookies from "js-cookie";
// import config from "./config";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    XApiKey: "S4R13E7?J5bjp7{!CZMADnGwhC8FGZZ2p5MBH0qk",
    Authorization: `Bearer ${Cookies.get("token")?.replace('"', "")}`?.replace(
      '"',
      ""
    ),
    // Authorization:
    //   "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJsb25nIiwiRmlyc3ROYW1lIjoic3RyaW5nIiwiTGFzdE5hbWUiOiJzdHJpbmciLCJBdmF0YXJVcmwiOiIiLCJnZW5kZXIiOiJNYWxlIiwiYmlydGhkYXRlIjoiMTIvMTMvMjAyMiAwNDowMjowOSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYmYiOjE2NzA5MzQ0OTUsImV4cCI6MTY3MTAyMDg5NSwiaWF0IjoxNjcwOTM0NDk1fQ.6DHUEAEokHaWOMuFIuV5SOYRLUSc_zDtE_5fhmeZic2qfedkvewcOayGnAfID_dsedUsazTlGXOFgj2aC73hdA",
  },
});

// gọi api thành công chỉ trả về response.data
instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});
export default instance;
