var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users/signup')
});

router.get('/:userid', (req,res) => {
  res.send(`Bem-vindo, ${req.params.userid}!`)
})

module.exports = router;
