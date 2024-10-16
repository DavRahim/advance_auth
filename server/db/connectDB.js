
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        console.log("mongo_uri: ", process.env.MONGODB_URI);
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connection to MongoDB: ", error.message);
        process.exit(1); // 1 is failure, 0 status code is success
    }
};