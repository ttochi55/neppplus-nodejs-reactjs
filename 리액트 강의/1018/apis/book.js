import { instance } from "./index.js";

const getBooks = async (params) => {
  const result = await instance.get("/book", {
    params: params,
  });
  return result.data;
};

const getBookDetail = async ({ isbn }) => {
  const result = await instance.get(`/book/${isbn}`);
  return result.data;
};

export { getBooks, getBookDetail };
