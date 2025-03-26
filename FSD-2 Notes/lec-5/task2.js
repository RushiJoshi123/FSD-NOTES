var fs = require('fs')
fs.writeFile("fsd.txt","hello",function(err){
       if(err){console.log("error in write");}
       else{fs.appendFile("fsd.txt","\nmorning",function(err){console.log(err? "error in append":"");})}}) 
var rfile = function(){setTimeout(function(){
       fs.readFile("fsd.txt","utf-8",(readEr,data)=>{ console.log(readEr? "Error in read": data );})},2000)}
rfile();