import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/location", locationRoutes);

export default app;