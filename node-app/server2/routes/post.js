import express from "express";
import { getPostMain, addPost, getPost } from "../controllers/post.js";
var router = express.Router();

/* GET home page. */
router.get("/main", getPostMain);

router.post("/", addPost);
router.get("/", getPost);

export default router;
