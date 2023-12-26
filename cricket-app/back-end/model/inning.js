import mongoose, { Schema } from "mongoose";

const inningSchema = new Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  battingTeam: { type: String, required: true },
  overs: { type: Number, required: true },
  inning: String,
  run: Number,
  wicket: Number,
  oversDone: Number,
  crr: Number,
  batsman1: String,
  batsman2: String,
  bowler: String,
  extras: Number,
  wd: Number,
  nb: Number,
  runningOver: [String],
});

export default mongoose.model("inning", inningSchema);
