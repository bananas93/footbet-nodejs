const { Router } = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('../models');

const router = Router();

passport.use(new GoogleStrategy({
  clientID: '675019088327-o7m0q41l96r78innp6dcbep8gmu6hr2i.apps.googleusercontent.com',
  clientSecret: 'zjXRM1LCGyIPFouWFEw7OUIj',
  callbackURL: 'http://localhost:3000/api/auth/google/callback',
},
((accessToken, refreshToken, profile, done) => {
  console.log(profile);
  // db.User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
})));

router.get('/',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const { token } = req.user;
    res.redirect(`http://localhost:3001?token=${token}`);
  });

module.exports = router;
