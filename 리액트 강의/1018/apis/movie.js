import { instance } from "./index.js";

const getMovies = async (params) => {
  const result = await instance.get("/movie", {
    params: params,
  });
  return result.data;
};

const apis = { getMovies };
export default apis;
