var express = require('express');
var router = express.Router();
var passport = require('passport');

// auth
router.get('/login', passport.authenticate('github'));
router.get('/logout', function (req, res) {
    req.logout();
    return res.status(200).json({ message: "Success" });
});

// github callback
router.get('/callback', passport.authenticate('github', { failureRedirect: '/' }),
    function (req, res) {
        return res.status(200).json({ message: "Success" });
    }
);

module.exports = router;