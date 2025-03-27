
// write a node js script to print query string of url in file using es6 format 
// file using callback 
// 1. fetch the query as an object need to convert query to string using 
//        stringify and then we can write it in the file 

var u = require("url")
var f = require("fs")

var addr1 = "https://localhost:8080/default.html?year=2025&month=feb"
var q1 = u.parse(addr1,true)
f.writeFile("FSD.txt",JSON.stringify(q1.query),(err)=>{console.log("completed");})
// fetch the query as a string and we can write it in the file 

var http = require("http");
http.createServer(function(req,res){
       res.write("hello world")
       res.end()
}).listen(3120)
