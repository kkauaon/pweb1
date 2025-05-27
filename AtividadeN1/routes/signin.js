var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signin', { user: req.query.u ? {
    name: req.query.u
  } : null });
});

module.exports = router;
