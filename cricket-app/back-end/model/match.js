import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  tramA_id: String,
  tramB_id: String,
  battingTeam_id: String,
  battingTeam: { type: String, required: true },
  overs: { type: Number, required: true },
});

export default mongoose.model("match", playerSchema);
