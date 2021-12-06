import express from "express";
import { getMovieList } from "../api/movie.js";

var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  // const query = req.query.query;
  // const { query, country } = req.query;
  // const result = await getMovieList({ query, country });
  const result = await getMovieList(req.query);

  res.json(result);
});

export default router;
