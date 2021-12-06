import axios from "axios";

export const getMovieList = async (params) => {
  const result = await axios.get(
    // original settings
    // "https://openapi.naver.com/v1/search/movie.json",

    // After proxy setting in packages.json
    "http://localhost:8080/movie",
    {
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
