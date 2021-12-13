import express from "express";
import { postUploadImage } from "../controllers/upload.js";
import { upload } from "../aws/index.js";

var router = express.Router();

// router.post("/image", postUploadImage);
router.post("/image", upload.single("file"), postUploadImage);

export default router;
