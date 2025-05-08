var express = require('express');
var router = express.Router();

/* GET signin */
router.get('/', function(req, res, next) {
  res.send("Signin page")
});

module.exports = router;
