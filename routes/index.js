var express = require('express');
var db=require('../connection');
var router = express.Router();
var math=require('../public/javascripts/gen');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { tile: 'Express' });
});







router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});


router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Express' });
});

router.get('/login', function(req, res, next) {

  res.render('login', { title: 'Express' });''
});

router.get('/range', function(req, res, next) {
  res.render('range', { title: 'Express' });
});





router.get('/edit', function(req, res, next) {

  res.render('edit', { title: 'Express' });
});








router.get('/generate', function(req, res, next) {
 

  var sql='SELECT * FROM loc_code';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('generate', { title: 'loc', userData: data});
 
  console.log(data);
  
});
});





router.get('/data', function(req, res, next) {
  var sql='SELECT * FROM range_tbl';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('data', { title: 'range', userData: data});
 
  console.log(data);
  
});
});


module.exports = router;