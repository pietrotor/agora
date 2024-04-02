import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_API;

const agora2030 = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

agora2030.interceptors.request.use(async (config) => {
  return config;
});

export default agora2030;
