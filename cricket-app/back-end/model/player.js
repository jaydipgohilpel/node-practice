import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
  name: { type: String, unique: true, required: true },
  teamId: String,
  four: Number,
  six: Number,
  run: Number,
  ball: Number,
  sr: Number,
  o: Number,
  m: Number,
  r: Number,
  w: Number,
  econ: Number,
});

export default mongoose.model("player", playerSchema);
