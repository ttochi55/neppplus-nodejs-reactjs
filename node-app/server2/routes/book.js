import express from "express";
import { getBookList, getBookDetail } from "../api/book.js";

var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  // const query = req.query.query;
  // const { query } = req.query;
  // const result = await getBookList({ query });
  const result = await getBookList(req.query);

  res.json(result);
});

router.get("/:isbn", async function (req, res, next) {
  const { isbn } = req.params;
  const result = await getBookDetail({ d_isbn: isbn });

  res.json(result);
});

export default router;
