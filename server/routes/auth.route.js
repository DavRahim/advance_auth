import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);


export default router;