const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const home = fs.readFileSync("views/index.html");

app.use("/static", express.static("static"));
// app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.post("/", (req, res) => {
  nam = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  let outputToWrite = `The name of the client is ${nam},${age} year old,${gender},residing at ${address}.More about him/her:${more}`;
  fs.writeFileSync("output.txt", outputToWrite);
  res.send("<h1>Your form has been sucessfully submited</h1>");
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(home);
});

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
