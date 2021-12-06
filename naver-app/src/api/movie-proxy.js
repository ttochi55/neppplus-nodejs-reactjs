import axios from "axios";
import openapi from "../configs/openapi.json";

export const getMovieList = async (params) => {
  const result = await axios.get(
    // original settings
    // "https://openapi.naver.com/v1/search/movie.json",

    // After proxy setting in packages.json
    "/v1/search/movie.json",
    {
      headers: {
        "X-Naver-Client-Id": openapi.Client_ID,
        "X-Naver-Client-Secret": openapi.Client_Secret,
      },
      params,
    }
  );
  // console.log(result);
  return result.data;
};

// 1
// const getMovieList = () => {};
// export { getMovieList };

// 2
// export const getMovieList = () => {};

// 3
// const getMovieList = () => {};
// export default getMovieList;
