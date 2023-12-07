const passport = require('passport');

const JwtStrategy = require('./rules/jwt.rule');

passport.use(JwtStrategy);