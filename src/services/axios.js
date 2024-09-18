import axios from "axios";

const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL_API,
    withCredentials: true
});

export default axiosConfig;