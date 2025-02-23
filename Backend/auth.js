import express from "express";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email", "https://www.googleapis.com/auth/fitness.activity.read"],
    },
    async (accessToken, refreshToken, profile, done) => {
      profile.accessToken = accessToken;
      return done(null, profile);
    }
  )
);

// Serialize & Deserialize
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Google OAuth Routes
app.get("/auth/google", passport.authenticate("google"));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => res.redirect("http://localhost:3000/dashboard")
);

// Fetch Google Fit Data
app.post("/api/fit-data", async (req, res) => {
  try {
    const user = req.user;
    if (!user?.accessToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const response = await axios.post(
      "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
      {
        aggregateBy: [
          {
            dataTypeName: "com.google.step_count.delta",
            dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
          },
        ],
        bucketByTime: { durationMillis: 86400000 },
        startTimeMillis: Date.now() - 7 * 86400000, // Last 7 days
        endTimeMillis: Date.now(),
      },
      {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Google Fit data:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch Google Fit data" });
  }
});

// Fetch User Info from Google
app.get("/api/user-info", async (req, res) => {
  try {
    const user = req.user;
    if (!user?.accessToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const response = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Failed to fetch user info" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
