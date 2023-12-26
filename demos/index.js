const express = require("express");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const jwt = require("jsonwebtoken");

const server = express();
server.use((req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    console.log(token);
    const decoded = jwt.verify(token, "secret");
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
});
server.use(express.json());
server.use("/products", productRoutes.router);
server.use("/users", userRoutes.router);

server.listen(3002, () => console.log("server started"));
