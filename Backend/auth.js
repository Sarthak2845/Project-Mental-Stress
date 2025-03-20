import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

const setupAuth = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your_secret",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: process.env.NODE_ENV === "production" }, // Secure cookie in production
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.NODE_ENV === "production"
          ? "https://mindmetricss.netlify.app/auth/google/callback"
          : "http://localhost:5000/auth/google/callback",
        scope: ["profile", "email", "https://www.googleapis.com/auth/fitness.activity.read"],
      },
      async (accessToken, refreshToken, profile, done) => {
        if (!accessToken) {
          return done(new Error("Access token not received"), null);
        }
        profile.accessToken = accessToken;
        profile.refreshToken = refreshToken || null;
        return done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};

export default setupAuth;
