import express from "express";
import playerRouter from "./routes/player.js"; 
import teamRouter from "./routes/team.js"; 
import matchRouter from "./routes/match.js"; 
import inningRouter from "./routes/inning.js"; 

const server = express();
const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

server.use(allowCrossDomain);
server.use(express.json());
server.use("/api/players", playerRouter);
server.use("/api/teams", teamRouter);
server.use("/api/matches", matchRouter);
server.use("/api/inning", inningRouter);

server.listen(3001, () => console.log("server started"));
