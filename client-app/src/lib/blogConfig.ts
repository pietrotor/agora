import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BLOG_URL_SERVICE;

const newsApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

newsApi.interceptors.request.use(async (config) => {
  const apiKey = process.env.NEXT_PUBLIC_BLOG_API_KEY;
  if (apiKey) {
    config.headers["Authorization"] = `Bearer ${apiKey}`;
  }

  return config;
});

export default newsApi;
