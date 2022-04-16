const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function speak() {
  const greeting = "Meow name is " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittySchema);

const fluffy = new Kitten({ name: "fluffy" });
fluffy.speak();

const silence = new Kitten({ name: "Silence" });
console.log(silence.name);

await fluffy.save();
fluffy.speak();
