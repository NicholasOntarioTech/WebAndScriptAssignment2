var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me Page' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me Page' });
});

/* GET Projects page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products Page' });
});

/* FALLBACK Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

module.exports = router;

