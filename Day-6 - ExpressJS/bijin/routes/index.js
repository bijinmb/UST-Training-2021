var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - Application Demo!', desc: 'This is the descripton of the application.' });
});

module.exports = router;
