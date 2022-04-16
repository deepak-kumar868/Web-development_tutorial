const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactus');

//define mongoose schema
var contactSchema=new mongoose.Schema({
  naam:String,
  phone:String,
  email:String,
  address:String
});

const Contact=mongoose.model('Contact',contactSchema);


const home = fs.readFileSync("views/index.html");
const contact = fs.readFileSync("views/contact.html");

app.use("/static", express.static("static")); //for saving static file
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(home);
});

app.get("/views/Contact", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(contact);
});

// app.post("/contact", (req, res) => {
//   console.log(req.body);
//   name = req.body.name;
//   phone = req.body.phone;
//   email = req.body.email;
//   address = req.body.address;
//   let outputToWrite = `Name:${name},Phone no.:${phone} ,email:${email} and address:${address}`;
//   fs.writeFileSync("output.txt", outputToWrite);
//   res.send("<h1>Your form has been sucessfully submited</h1>");
// });

app.post('/contact',(req,res)=>{
  var myData=new Contact(req.body);
  myData.save().then(()=>{
    res.send("This Data has been saved to database")
  }).catch(()=>{
    res.status(400).send("Item has not saved to the database")
  });
  console.log(myData)
})

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
