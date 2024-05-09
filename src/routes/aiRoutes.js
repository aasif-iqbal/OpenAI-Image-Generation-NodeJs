import express from "express";
import {generateImage} from "../controllers/ai_controllers";

const router = express.Router();

router.post('/', generateImage);

export default router;
