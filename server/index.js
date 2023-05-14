const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose, mongo } = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//dbconnection

mongoose
  .connect("mongodb://127.0.0.1:27017/myDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//schema and model

const productSchema = mongoose.Schema({
  title: String,
  desc: String,
  price: String,
  thumbnail: String,
});

//model
const Product = mongoose.model("Product", productSchema);

//post request   /posting

app.post("/cartadd", async (req, res) => {
  Product.setMaxListeners(20);
  Product.create({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

//get request  /reading

app.get("/cartpage", async (req, res) => {
  Product.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

//delete request /deleting

app.delete(`/delete/:id`, (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

PORT = 5000;
app.listen(PORT, () => {
  console.log("server runnig at 5000");
});
