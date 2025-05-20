import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
  withCredentials: true,
});

export default instance;
