import axios from "../axios";
const handleLoginApi = (username, password) => {
  return axios.post("/api/Identity/login", { username, password });
};
const handleRegisterApi = (data) => {
  return axios.post("/api/Identity/register", data);
};
const handleDailyReport = (date) => {
  return axios.get(`/api/Position/Daily-Report?date=${date}`);
};
const handleGetUser = () => {
  return axios.get("/api/Identity/get-user");
};
export { handleLoginApi, handleRegisterApi, handleDailyReport, handleGetUser };
