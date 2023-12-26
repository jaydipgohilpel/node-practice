const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, min: 0, required: true },
    discountPercentage: { type: Number, min: 0, max: 50 },
    rating: { type: Number, min: 0, max: 50 },
    stock: Number,
    brand: String,
    category: String,
    thumbnail: { type: String, required: true },
    images: [String],
  });
  
  exports.ProductModel = mongoose.model("product", productSchema);