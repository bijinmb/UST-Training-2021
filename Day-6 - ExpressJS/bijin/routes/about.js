var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express - Application About Page.', desc: 'This is the about us page of the application.', addr: 'Visit us at: ust.com, Box 564, Cochin, USA'});
  console.log(req.url);
});



module.exports = router;
