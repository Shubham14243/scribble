import express from "express";
import dotenv from "dotenv";

import { connectToDb } from "./db/connection.js";
import gameRoutes from "./routes/gameRoute.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        responseStatus: "success",
        responseCode: 200,
        message: "Server is Up!"
    });
});

app.use("/api/game", gameRoutes);

app.listen(PORT, () => {
    connectToDb();
    console.log(`Server Running! PORT = ${PORT}`);
});