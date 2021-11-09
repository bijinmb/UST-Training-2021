var express = require('express');


var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('contact-us', { title: req.query.fname, desc: 'This is the Contact us page of the application.' });
  
});

module.exports = router;
