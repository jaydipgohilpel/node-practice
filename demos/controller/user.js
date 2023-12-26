const mongoose = require("mongoose");
const model = require("../model/user");
const UserModel = model.User;
const jwt = require('jsonwebtoken');

async function main() {
  await mongoose.connect(
    "mongodb+srv://Jenish:wADhIx0fjvnONFZB@cluster0.iqattcl.mongodb.net/ecommerce"
  );
}
main().catch((err) => console.log("DB_ERR", err));

exports.addUser = async (req, res) => {
  try {
      const user = await UserModel(req.body).save();
      const token = jwt.sign({email:req.body.email}, 'secret') || 'failed';
      user.token = token;
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
