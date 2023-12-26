import mongoose from "mongoose";
import PlayerModel from "../model/player.js";

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cricket-app", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true, //make this true
      autoIndex: true, //make this also true
    });
  } catch (err) {
    console.log(err);
  }
})();

export const addPlayer = async (req, res) => {
  try {
    const player = await PlayerModel.insertMany(req.body);
    res.status(201).json(player);
    console.log(player);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
