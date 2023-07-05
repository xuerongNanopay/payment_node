import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030/';

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 2500;

//TODO: Interceptor for request?
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(
      (error.response && error.response.data) || "Internal Error"
    )
  }
);

export default axiosInstance;