//Module in node js

const fs=require("fs");
let txt=fs.readFileSync("deepak.txt","utf-8");

txt=txt.replace("Deepak","Gaurav");

console.log("The content of this file is:");
console.log(txt);

console.log("Creating a new file....");
fs.writeFileSync("gaurav.txt",txt);