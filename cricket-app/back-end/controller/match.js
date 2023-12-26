import mongoose from "mongoose";
import MatchModel from "../model/match.js";
import InningModel from "../model/inning.js";

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

export const addMatch = async (req, res) => {
  try {
    const match = await MatchModel(req.body).save();
    const inningObj = {
        ...req.body,
        inning: '1',
        run: 0,
        wicket: 0,
        oversDone: 0,
        crr: 0,
        batsman1: '',
        batsman2: '',
        bowler: '',
        extras: 0,
        wd: 0,
        nb: 0,
        runningOver: [],
    }
    const inning = await InningModel.findByIdAndUpdate('651d59cda0861ff9eb28ae5f', inningObj );
    res.status(201).json({match, inning});
    console.log(match);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};