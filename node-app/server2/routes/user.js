import express from "express";
import { postUser, postUserLogin, getMyInfo } from "../controllers/user.js";
var router = express.Router();

// RESTAPI(/:abc) = req.params
// GET querystring(?abc) = req.query
// POST = req.body

// router.post("/", function (req, res, next) {
//   console.log(req.body);
//   res.send("respond with a resource");
// });

router.post("/", postUser);
router.post("/token", postUserLogin);
router.get("/me", getMyInfo);

export default router;
