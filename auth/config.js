var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var User = require('../models/user');

module.exports = function (passport) {
    passport.use(new GithubStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    },
        function (accessToken, refreshToken, profile, done) {
            // If a user with this id exists fetch it from the 
            // db, otherwise create a new user
            User.findOne({ github_id: profile.id }, function (err, user) {
                if (err) { console.log(err); }
                if (!err && user !== null) {
                    return done(null, user);
                } else {
                    profile = JSON.parse(profile._raw);
                    user = new User({
                        login: profile.login,
                        name: profile.name,
                        github_id: profile.id,
                        bio: profile.bio || "",
                        location: profile.location || "",
                        blog: profile.blog || "",
                        email: profile.email || "",
                        company: profile.company || "",
                        avatar_url: profile.avatar_url || ""
                    });
                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("saving user ...");
                            return done(null, user);
                        }
                    });
                }
            });
        }
    ));
}