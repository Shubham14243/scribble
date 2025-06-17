import mongoose from "mongoose";

export const connectToDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully!");
    } catch (error) {
        console.error("DB connection error:", error);
    }

};