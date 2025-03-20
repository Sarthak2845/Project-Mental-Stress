import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import setupAuth from "./auth.js";
import routes from "./routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Middleware with updated CORS
app.use(cors({ origin: "https://mindmetricss.netlify.app", credentials: true }));
app.use(express.json());

// Setup Authentication
setupAuth(app);

// Use API Routes
app.use("/", routes);

// Serve React build folder (assuming backend deployment)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

// Serve React app for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
