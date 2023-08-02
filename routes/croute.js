const express = require('express');
const router = express.Router();
const sql=require('mysql');
var db=require('../connection');
const EventEmmiter =require('events');
const event =new EventEmmiter();


router.get('/chome', (req, res) => {
    res.render('chome');
  });

 










  module.exports = router;