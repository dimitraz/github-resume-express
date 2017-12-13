var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var url = require('url');
var User = require('../models/user');

// auth
router.get('/login', passport.authenticate('github', { session: false }), function (err, user) {
    if (err) return res.status(400).json({ err: "err" });
    return res.status(200).end();
});

router.get('/logout', function (req, res) {
    req.logout();
    return res.status(200).json({ message: "Success" });
});

// github callback
router.get('/callback', passport.authenticate('github', { failureRedirect: '/' }),
    // user has been successfully authenticated
    // create a session token and return it
    function (req, res) {
        var payload = { sub: req.user._id };
        var token = jwt.sign(payload, process.env.JWT_SECRET);

        res.redirect(url.format({
            pathname: '/',
            query: {
                'token': token
            }
        }));
    }
);

// get logged in user
router.get('/return', function (req, res) {
    var token = req.headers.authorization.split(' ')[1];

    return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) return res.status(401).json({ err: "Unauthorised action" });

        // check if user exists
        var id = decoded.sub;
        return User.findById(id, (err, user) => {
            if (err || !user) {
                return res.status(401).end();
            }

            return res.status(200).json({ user: user });
        });
    });
});

module.exports = router;