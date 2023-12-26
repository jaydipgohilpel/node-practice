import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema({
  name: String,
  playerIds: [String]
});

export default mongoose.model("team", teamSchema);
