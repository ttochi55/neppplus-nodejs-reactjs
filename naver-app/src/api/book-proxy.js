import axios from "axios";
import openapi from "../configs/openapi.json";

export const getBookList = async (params) => {
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": openapi.Client_ID,
      "X-Naver-Client-Secret": openapi.Client_Secret,
    },
    params,
  });

  return result.data;
};
