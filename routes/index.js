var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1;
  res.render('index',
    {
      title: 'Express',
      sessionView: req.session.views
    });
});

module.exports = router;