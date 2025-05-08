var express = require('express');
var router = express.Router();

/* GET signup */
router.get('/', function(req, res, next) {
  res.send("Signup page")
});

module.exports = router;
