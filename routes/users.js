
var express = require('express');
var db=require('../connection');
var router = express.Router();


var path=require('path')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});





module.exports = router;
