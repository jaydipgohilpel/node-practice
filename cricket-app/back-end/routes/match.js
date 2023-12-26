import express from 'express';
import * as userController from '../controller/match.js';


const router = express.Router();

router
    .post('/', userController.addMatch);

export default router;