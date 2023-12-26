import express from 'express';
import * as userController from '../controller/team.js';


const router = express.Router();

router
    .post('/', userController.addTeam)
    .get('/', userController.getTeams)

export default router;