show dbs
use devilkart
show collections

db.items.find({price:20000})

//Deleting items from the Mongo Database
db.itmes.deleteOne({price:20000})
//deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price:20000})