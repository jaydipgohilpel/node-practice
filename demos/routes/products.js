const productController = require('../controller/products');
const express = require("express");

const router = express.Router();

router
  .get("/", productController.getProducts)
  .post("/", productController.addProduct)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProducts)
  .delete("/:id", productController.deleteProducts); 

exports.router = router;