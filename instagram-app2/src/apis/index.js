import axios from "axios";

// export const instance = axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
