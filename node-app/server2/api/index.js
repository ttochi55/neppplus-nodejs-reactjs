import axios from "axios";
import openapi from "../configs/openapi.js";

export const naverAxios = axios.create({
  baseURL: "https://openapi.naver.com",
  headers: {
    "X-Naver-Client-Id": openapi.Client_ID,
    "X-Naver-Client-Secret": openapi.Client_Secret,
  },
});
