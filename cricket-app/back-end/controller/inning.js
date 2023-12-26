import mongoose from "mongoose";
import InningModel from "../model/inning.js";
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

export const getInning = async (req, res) => {

  try {
      const inning = await InningModel.find();
    //   const inning_players = await PlayerModel.find({teamId:}) 
    res.status(200).json({
        ...inning,

    });
    console.log(inning);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};