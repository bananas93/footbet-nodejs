const { Router } = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const db = require("../models");

const router = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "675019088327-o7m0q41l96r78innp6dcbep8gmu6hr2i.apps.googleusercontent.com",
      clientSecret: "zjXRM1LCGyIPFouWFEw7OUIj",
      callbackURL: `${process.env.CLIENT_URL}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { displayName, id, emails } = profile;
      const user = await db.User.findOrCreate({
        where: { googleId: id },
        defaults: {
          name: displayName,
          googleId: id,
          email: emails[0].value,
        },
      });
      done(user);
    }
  )
);

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/callback", (req, res, next) =>
  passport.authenticate("google", async (user, err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const token = await db.User.generateAuthToken(user[0].dataValues);
    res.cookie("JWToken", token, {
      expires: new Date(Date.now() + 10 * 604800000),
      path: "/",
    });
    return res.redirect(`${process.env.CLIENT_URL}/profile`);
  })(req, res, next)
);

module.exports = router;
