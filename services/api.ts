import axios, { AxiosInstance } from "axios";

axios.defaults.withCredentials = true;

const Api: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

export { Api };
