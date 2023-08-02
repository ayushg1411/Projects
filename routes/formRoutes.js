// routes/formRoutes.js
const express = require('express');
const router = express.Router();
var db=require('../connection');
const EventEmmiter =require('events');
const event =new EventEmmiter();
const fs=require('fs');
let mp =require('./login');


router.get('/home', (req, res) => {
  res.render('home');
});


router.post('/vendorform', (req, res)=>{


  console.log(req.body)
  res.render('login');
});




router.get('/register', (req, res) => {
  res.render('register');
});
router.post('/register', (req,res)=>{
 let id=req.body.id;
 let name=req.body.name;
let role=req.body.role;
console.log(id+name+role);
  var que= `insert into user_dtl values(${id}, '${name}', '${role}')`
  db.query(que, function (err, result ){
    if (err) throw err;
  console.log("dfffffffffffffff")
  res.redirect("login")
    });

})








router.get('/', (req, res) => {
  res.render('welcome');
});




router.get('/customer', (req, res) => {
  res.render('customer');
});




router.get('/err', (req, res) => {
  res.render('err');
});





router.get('/auth', function(req, res, next) {
  res.render('auth', { title: 'Express' });
});



router.get('/basic', function(req, res, next) {
  res.render('basic', { title: 'Express' });
});



router.get('/basic', function(req, res, next) {
  res.render('basic', { title: 'Express' });
});


router.post('/auth', (req, res)=>{
 let sid=req.body.id;
 let name=req.body.name;
 let password=req.body.pass;

var sql=`select * from user_dtl where id=${sid}`;
let did;
let dname;
let drole;
db.query(sql,(err, data) => {
  if (err) throw err;

  Object.keys(data).forEach(function(key) {
    var row = data[key];
    did=row.id;
    dname=row.name;
    drole=row.role;
    console.log(row.name+ row.id+ "dididid"+ row.role)
    try{
      if(sid==did && name==dname)
      {
      console.log("matched");
      res.render('home')
    }
  
      
    
    }
    catch{
       console.log("eorrr___________________")
       res.render('home');
    }

  
  });
});

})





event.on("callme", ()=>{


  
 function ExcelToJson(file)
 {
     

     console.log("file converyed_______________")
         try {
           var reader = new FileReader();
           reader.readAsBinaryString(file);
           reader.onload = function(e) {
 
               var data = e.target.result;
               var workbook = XLSX.read(data, {
                   type : 'binary'
               });
               var result = {};
               var firstSheetName = workbook.SheetNames[0];
               //reading only first sheet data
               var jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);
               alert("your task is done");
               //console.log(jsonData);
               //displaying the json result into HTML table
          
               }
           }catch(e){
               console.error(e);
           }
 }



 

  console.log("inside----------- ------fffffffffffffffffff-");
     var file=document.getElementById('file_upload').files;
   if(file.length==0)
  {   alert("please choose any file");
      return ;}
 
   var filename=file[0].name;
   
   var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
 if(extension==".XLSX" || extension=="XLS")
    ExcelToJson(file[0]);   // pass file[0] as a argument
    else
 {    alert(" please choose only excel file");
    }


 console.log("called---------------------------");


 
}


)






/* GET home page. */






router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Express' });
});



router.get('/excel', function(req, res, next) {
  res.render('excel', { title: 'Express' });
});


router.get('/range', function(req, res, next) {
  res.render('range', { title: 'Express' });
});



router.get('/user', function(req, res, next) {
  var sql='SELECT * FROM table_user_role';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('user', { title: 'user', userData: data});
 
  console.log(  "data...................."+data);
  
});


});

let names="";

event.on("onme", ()=>{

  // <a href="/generate"><i class="fa fa-angle-right"></i>l</a>

  const data = [
    {  name :"ADMIN",   title: "HOME",link: "http://localhost:5050/home" },
    {  name : "ADMIN",   title: "CUSTOMER",link:  "http://localhost:5050/login"  },
    {  name : "ADMIN",   title: "USER",link:  "http://localhost:5050/user"  },
    {  name : "ADMIN",   title: "VENDOR",link:  "http://localhost:5050/login"  },
    {  name : "ADMIN",   title: "LOCATION INFO.",link:  "http://localhost:5050/generate"  },
    {  name : "ADMIN",   title: "RANGE",link:  "http://localhost:5050/data"  },
    {  name : "ADMIN",   title: "ADD TABLE",link:  "http://localhost:5050/excel"  },
    {  name :"CUSTOMER",   title: "HOME",link: "http://localhost:5050/home" },
    {  name : "CUSTOMER",   title: "CUSTOMER",link:  "http://localhost:5050/login"  },
    {  name : "CUSTOMER",   title: "USER",link:  "http://localhost:5050/user"  },
    {  name :"VENDOR",   title: "HOME",link: "http://localhost:5050/home" },
    {  name : "VENDOR",   title: "CUSTOMER",link:  "http://localhost:5050/login"  },
    {  name : "VENDOR",   title: "USER",link:  "http://localhost:5050/user"  },
    {  name : "VENDOR",   title: "VENDOR",link:  "http://localhost:5050/login"  },
    {  name : "VENDOR",   title: "LOCATION INFO.",link:  "http://localhost:5050/generate"  },

  ];


  var sql='insert into table_user_role (userrole, linkpage, linktext) values ?';
  db.query(sql, [data.map(item => [ item.name,  item.link, item.title])], (err, result) => {
    if (err) throw err;
    console.log('Data inserted successfully.');

    // Close the connection to the database

});

console.log("called")
});


router.post('/user',(req,res)=>{
  names=req.body.name;
  event.emit("onme");

  console.log(  "name " + req.body.name);
  console.log("saved");
  res.render('edit');

});





router.get('/edit', function(req, res, next) {

  res.render('edit', { title: 'Express' });
});





router.get('/home', function(req, res, next) {


    res.render('home', { title: 'Express' });
 
  });
  
  

  router.get('/vendorform', function(req, res, next) {


    res.render('vendorform', { title: 'Express' });
 
  });


  




router.get('/generate', function(req, res, next) {
 

  var sql='SELECT * FROM loc_code order by LOCATION_CODE';
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



// GET request to display the form


router.get('/addme', (req, res) => {
  res.render('addme');
});




router.post('/uploads', (req, res)=>{
 // event.emit("callme");
 event.emit("change");
  console.log(req.body.name);
  res.render('login');
  console.log("-------------------------------------------------------------------------------------");
})


event.on("change", ()=>{
  console.log("emmiter called")
  const jsonData = JSON.stringify(REQ, null, 2);
  fs.writeFileSync(filename, jsonData);

});




  
// POST request to handle form submission
router.post('/submit', (req, res) => {
  const formData = req.body;
  var country=formData.COUNTRY;
  var state=formData.STATE;
  var city=formData.CITY;
  var longi=formData.LONGITUDE;
  var lati=formData.LATITUDE;


try{
    var sql = `INSERT INTO loc_code  VALUES ( (select curr_number from range_tbl), ${longi} , ${lati} , "${country}", "${state}", " ${city}")`;
    var sql2=`update range_tbl set curr_number=curr_number+1`;
    db.query(sql, function (err, result) {
      if (err){
        res.render('error')
      }
      else
     { console.log("1 record inserted");
     console.log(formData); // For testing purposes
 
  res.render('edit');}


    
   
    
  });
  db.query(sql2, function (err, result) {
    if (err){
      res.render('error')
    }
    else
   { console.log("table updated");
   console.log(formData); // For testing purposes

res.render('edit');}
});


 
}
catch (ee){
    res.render('error');

}



  
  // Process the form data here (e.g., save it to a database, a file, etc.)
  
  

});

module.exports = router;
