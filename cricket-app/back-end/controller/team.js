import mongoose from "mongoose";
import TeamModel from "../model/team.js";

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

export const addTeam = async (req, res) => {
  try {
    const team = await new TeamModel(req.body).save();
    res.status(201).json(team);
    console.log(team);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const getTeams = async (req, res) => {
  try {
    const team = await TeamModel.find();
    res.status(200).json(team);
    console.log(team);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
