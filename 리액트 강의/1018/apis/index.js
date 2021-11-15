import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.128:3000",
});

export { instance };
