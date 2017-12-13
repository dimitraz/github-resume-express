var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("token");
  console.log(res.headers['x-auth-token']);
  console.log(req.headers['x-auth-token']);
  console.log("fhghjgjm");
  //console.log(req.user);
  res.send('hello');
});

module.exports = router;
