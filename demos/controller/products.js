const mongoose = require("mongoose");
const model = require("../model/products");
const ProductModel = model.ProductModel;

async function main() {
  await mongoose.connect(
    "mongodb+srv://Jenish:wADhIx0fjvnONFZB@cluster0.iqattcl.mongodb.net/ecommerce"
  );
}
main().catch((err) => console.log("DB_ERR", err));

exports.getProducts = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = await ProductModel(req.body).save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findOneAndReplace({_id:id}, req.body);
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findByIdAndUpdate(id, req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
