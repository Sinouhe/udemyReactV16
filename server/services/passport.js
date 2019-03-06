const passport = require('passport');
const User = require('../models/user')
const config = require('../config')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLogin = new jwtStrategy(jwtOptions,function(payload, done){
    const userID = payload.sub;
    User.findById(userID, function(err, user) {
        if (err) {
            return done(err, false)
        }
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    });
});

passport.use(jwtLogin)