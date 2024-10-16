import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;


// middleware

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies


// Routes
app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Advance Auth Project Api Working Done>!@!!!",
    });
})

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT);
});