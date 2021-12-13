import axios from "axios";

export const signUp = async (data) => {
  const result = await axios.post("http://localhost:8080/user", data);
  return result.data;
};

export const logIn = async (data) => {
  const result = await axios.post("http://localhost:8080/user/token", data);
  return result.data;
};
