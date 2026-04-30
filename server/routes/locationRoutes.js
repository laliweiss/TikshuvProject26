import express from "express";
import { updateLocation, getLatestLocations } from "../controllers/locationController.js";

const router = express.Router();

router.post("/", updateLocation);
router.get("/", getLatestLocations);

export default router;