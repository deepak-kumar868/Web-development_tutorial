const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const indexs = fs.readFileSync("./index.html");

//for serving static files
app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.status(200).send("This is homepage of my first express app");
});

app.get("/about", (req, res) => {
  res.send("This is about page of my website");
});

app.post("/about", (req, res) => {
  res.send("This is about page of my website with codewithharry");
});

app.get("/index", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(indexs);
});

app.get("/this", (req, res) => {
  res.status(404).send("404 This page is not found");
});

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
