import express from "express";
import matchController from "../controller/match-controller.js"; // Use ES imports too

const router = express.Router();

router.post("/match", matchController.sendMatchRequest);

export default router; // ✅ Fix: Use ES module export