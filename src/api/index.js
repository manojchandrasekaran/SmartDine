import axios from 'axios';

console.log(import.meta.env.VITE_API_URL);

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    config.withCredentials = true; // To send cookie in request
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { instance };
