import express from 'express';
import * as inningController from '../controller/inning.js';


const router = express.Router();

router
    .get('/', inningController.getInning);

export default router;