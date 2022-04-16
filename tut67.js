//Inserting data in mongo db

use devilkart
db.items.insertOne({name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98})

db.items.insertMany([{name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98},
{name:"Moto 30s",price:12000,rating:4.9,qty:733,sold:198},
{name:"Redmii 6",price:10000,rating:5.0,qty:1133,sold:1198,isBig:true}])