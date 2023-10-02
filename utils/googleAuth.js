const db = require('../models');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: '675019088327-o7m0q41l96r78innp6dcbep8gmu6hr2i.apps.googleusercontent.com',
  clientSecret: 'zjXRM1LCGyIPFouWFEw7OUIj',
  callbackURL: 'http://www.example.com/auth/google/callback',
},
((accessToken, refreshToken, profile, done) => {
  // db.User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
})));

module.exports = passport;
