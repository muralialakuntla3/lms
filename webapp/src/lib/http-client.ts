import axios from "axios";

// Define a function to safely access the environment variables from window
function getRuntimeConfig() {
  return window.env && window.env.VITE_API_URL ? window.env.VITE_API_URL : 'http://localhost:8080/api';
}

const axiosInstance = axios.create({
  baseURL: getRuntimeConfig(),
});

export default axiosInstance;
