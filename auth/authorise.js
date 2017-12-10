var jwt = require('jsonwebtoken');
var User = require('../models/user');

// Middleware for authorising requests
// to an api endpoint
module.exports = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ err: "Unauthorised action" });
    }

    // get the last part from a authorization header string like "bearer token-value"
    var token = req.headers.authorization.split(' ')[1];

    // decode the token
    return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) return res.status(401).json({ err: "Unauthorised action" });

        // check if user exists
        var id = decoded.sub;
        return User.findById(id, (err, user) => {
            if (err || !user) {
                return res.status(401).end();
            }

            return next();
        });
    });
}