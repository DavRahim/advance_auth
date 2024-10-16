import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./db/connectDB.js";


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;



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