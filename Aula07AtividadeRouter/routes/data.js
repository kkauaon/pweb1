var express = require('express');
var router = express.Router();

/* POST data */
router.post('/', function(req, res, next) {
  res.send('Posting data');
});

module.exports = router;
