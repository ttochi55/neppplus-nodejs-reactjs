const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send({success: true});
// });

app.get("/", (req, res) => {
  res.send("Hello World1");
});

app.get("/hi", (req, res) => {
  res.send("Hello World2");
});

app.listen(3000, () => {
  console.log("server start");
});
