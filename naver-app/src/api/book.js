import axios from "axios";

export const getBookList = async (params) => {
  const result = await axios.get("http://localhost:8080/book", {
    params,
  });

  return result.data;
};

export const getBookDetail = async ({ isbn }) => {
  const result = await axios.get(`http://localhost:8080/book/${isbn}`);

  console.log(result.data);

  return result.data;
};
