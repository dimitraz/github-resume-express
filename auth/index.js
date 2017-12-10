var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

// auth
router.get('/login', passport.authenticate('github', { session: false }, function(err, user) {
    if (err) return res.status(400).json({ err: "err" });
    return res.status(200);
}));

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
        var token = jwt.sign(payload,  process.env.JWT_SECRET);

        return res.status(200).json({
            user: req.user,
            token: token
        });
    }
);

module.exports = router;