import express from "express";
import conn from "../db/index.js";
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const result = await conn.query("SELECT * FROM post");
  console.log(result[0]);

  res.render("index", { title: "Express" });
});

export default router;
