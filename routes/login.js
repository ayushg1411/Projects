const express = require('express');
const router = express.Router();
const sql=require('mysql');
var db=require('../connection');
const EventEmmiter =require('events');
const event =new EventEmmiter();










let admin;


router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });
  


  let table;









  event.on("pagin",  function(req, res){
      
    try{
    
      let type="null";
    
         type=req.body;
        
       
       
        var id=type.id;
       
    
         var roles;
      var ques=`select role from user_dtl where id=${id};`
      db.query(ques, function (err, data, fields) {
        if (err) throw err;
        Object.keys(data).forEach(function(key) {
         roles = data[key].role;
        
          console.log(roles);
      
        });
          if(roles=="ADMIN")
         {
          console.log("admin");
            admin="ADMIN";
          var sql=`SELECT * FROM table_user_role where userrole="${admin}"`;
          db.query(sql, function (err, data, fields) {
          if (err) throw err;
          conso();
          res.render('chome', {dta:data});
          console.log(data);
      
        });
          
         }
         else if (roles=="CUSTOMER")
         {
          console.log("customer");
           admin="CUSTOMER";
          var sql=`SELECT * FROM table_user_role where userrole="${admin}"`;
          db.query(sql, function (err, data, fields) {
          if (err) throw err;
          conso();
          res.render('chome', {dta:data});
       
          console.log(data);
         
    
      
        });
        
         }
         else if (roles=="SALES EXECUTIVE")
         {
          console.log("SALES");
           admin="SALES EXE";
          var sql=`SELECT * FROM table_user_role where userrole="${admin}"`;
          db.query(sql, function (err, data, fields) {
          if (err) throw err;
          conso();
          res.render('chome', {dta:data});
       
          console.log(data);
         
    
      
        });
        
         }
         else if(roles=="VENDOR")
         {
        
          console.log("vendor");
           admin="VENDOR";
          var sql=`SELECT * FROM table_user_role  where userrole="${admin}"`;
          db.query(sql, function (err, data, fields) {
          if (err) throw err;
          conso();
          console.log(admin);
          res.render('chome', {dta:data});
          console.log("tableeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"+table);
          console.log(data);
       
      
        });
         }
         else{
          res.redirect("/err");
         }
    
      });
    }
    catch{
      res.render('err')
    }
console.log("helllo from pagin")

  });

 
  

  router.post('/login', (req, res) => {

event.emit("pagin", req, res);

});


router.get('/home2', (req, res) => {
   
console.log("laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllll")
console.log(  typeof  table);
console.log(  JSON.parse(table));
res.render('home2', {dta: JSON.parse(table)});
});

router.get('/admin1', (req, res) => {
   
  console.log("laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllll")
  console.log(  typeof  table);
  console.log(  JSON.parse(table));
  res.render('admin1', {dta: JSON.parse(table)});
  });
  
  router.post('/admin1', (req, res)=>{


    console.log(req.body)
    res.render('edit');
  });
  
  
  



function conso()
{
  



function getCord() {
  return new Promise((resolve, reject) => {
  
       var queryString = `SELECT * FROM table_user_role where userrole="${admin}"`;
       db.query(queryString, function(err, recordset){
           if(err){
               console.log(err)
               return;
           }
           else{
               //console.log(JSON.stringify(recordset));
               table = JSON.stringify(recordset);
           }
           resolve(true);
       });
    });
  }
  getCord().then(() => console.log(table));

}



 




  module.exports =router;


