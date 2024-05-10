import express from "express";
import {generateImage} from "../controllers/aiController.js";

const router = express.Router();

router.post('/generate', generateImage);

export default router;
