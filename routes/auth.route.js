const { Router } = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../models');

const router = Router();

passport.use(new GoogleStrategy({
  clientID: '675019088327-o7m0q41l96r78innp6dcbep8gmu6hr2i.apps.googleusercontent.com',
  clientSecret: 'zjXRM1LCGyIPFouWFEw7OUIj',
  callbackURL: 'https://footbet.herokuapp.com/api/auth/google/callback',
},
(async (accessToken, refreshToken, profile, done) => {
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
})));

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback', (req, res, next) => passport.authenticate('google', async (user, err) => {
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  const token = await db.User.generateAuthToken(user[0].dataValues);
  const now = new Date();
  const time = now.getTime();
  const expireTime = time + 1000 * 36000;
  now.setTime(expireTime);
  res.cookie(
    'JWToken',
    token,
    {
      expires: now.toUTCString(),
      path: '/',
    },
  );
  return res.redirect('https://footbet.herokuapp.com/');
})(req, res, next));

module.exports = router;
