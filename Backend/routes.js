import express from "express";
import axios from "axios";
import passport from "passport";

const router = express.Router();

// ✅ Middleware to Check Authentication
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed
  }
  res.status(401).json({ error: "Unauthorized access. Please log in." });
};

// ✅ Google OAuth Routes
router.get("/auth/google", passport.authenticate("google"));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/sign" }),
  (req, res) => res.redirect("http://localhost:5173/home")
);

// ✅ Logout Route
router.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    req.session.destroy();
    res.send({ message: "Logged out successfully" });
  });
});

// ✅ Check User Session
router.get("/auth/session", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

// ✅ Fetch Google Fit Data (Protected)
router.get("/api/fit-data", isAuthenticated, async (req, res) => {
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
          startTimeMillis: Date.now() - 86400000, // Today's steps
          endTimeMillis: Date.now(),
        },
        {
          headers: { Authorization: Bearer ${user.accessToken} },
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching Google Fit data:", error);
      res.status(500).json({ error: "Failed to fetch Google Fit data" });
    }
  });

// ✅ Fetch User Info from Google (Protected)
router.get("/api/user-info", isAuthenticated, async (req, res) => {
  try {
    const user = req.user;
    if (!user?.accessToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const response = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: Bearer ${user.accessToken} },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Failed to fetch user info" });
  }
});

// ✅ Navigation Routes (Protected)
const navItems = [
  { name: "Home", path: "/home" },
  { name: "Recipes", path: "/recipes" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// ✅ Home (Protected)
router.get("/home", isAuthenticated, (req, res) => {
  res.json({ message: "Welcome to Home Page", user: req.user, navItems });
});

// ✅ Recipes (Protected)
router.get("/recipes", isAuthenticated, (req, res) => {
  res.json({ message: "Welcome to the Recipes Page", recipes: [] });
});

// ✅ About (Protected)
router.get("/about", isAuthenticated, (req, res) => {
  res.json({ message: "About Us Page", description: "Learn more about us!" });
});

// ✅ Contact (Protected)
router.get("/contact", isAuthenticated, (req, res) => {
  res.json({ message: "Contact Us", email: "avinashshetty4455@example.com" });
});

export default router;