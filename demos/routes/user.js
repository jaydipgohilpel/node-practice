const userController = require('../controller/user');
const express = require("express");

const router = express.Router();


router
  .post("/", userController.addUser)

exports.router = router;