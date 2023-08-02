
var tabledata;
var rows = [];
 
var jsondata={};
var jso;










     function Convert() {
        var table = document.getElementById("display_table_data");
        var header = [];
      
        for (var i = 0; i < table.rows[0].cells.length; i++) {
            header.push(table.rows[0].cells[i].innerText);
        }
 
        for (var i = 1; i < table.rows.length; i++) {
            var row = {};
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                row[header[j]] = table.rows[i].cells[j].innerHTML;
            }
            rows.push(row);
        }
 
        alert(JSON.stringify(rows));
        jsondata=JSON.stringify(rows);
        
      
        window.localStorage.setItem("keys", jsondata);
        jso=JSON.parse(localStorage.getItem("keys"));
      console.log(JSON.parse(localStorage.getItem("keys")));
        console.log(jsondata);
        console.log("hhhhh");

    }
//console.log(rows.toString( ));
  //  var datas=Convert();





    function displayJsonToHtmlTable(jsonData){
        var table=document.getElementById("display_table_data");
        if(jsonData.length>0){
            var htmlData='<tr><th>TABLE NAME</th><th>FIELD NAME</th><th>DATA TYPE</th><th>LENGTH</th><th>STATUS</th><th>KEY</th></tr>';
            for(var i=0;i<jsonData.length;i++){
                var row=jsonData[i];
                htmlData+='<tr><td>'+row["TABLE NAME"]+'</td><td>'+row["FIELD NAME"]
                      +'</td><td>'+row["DATA TYPE"]+'</td><td>'+row["LENGTH"]+'</td><td>'+row["STATUS"]+'</td><td>'+row["KEY"]+'</td></tr>';
            }
            table.innerHTML=htmlData;
        }else{
            table.innerHTML='There is no data in Excel';
        }
    }
    


    
 function upload()
 {
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
     return;}
 }
 
    
   
   
 
    
    
    function add()
    {
        return a+b;
    }
   

    module.exports= add;
   