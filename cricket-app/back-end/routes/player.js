import express from 'express';
import * as userController from '../controller/player.js';


const router = express.Router();

router
    .post('/', userController.addPlayer);

export default router;