// write a node js script to write an array of object with property name and age 
// in file name student.txt  then read the file and dispaly the content on console 
var fs = require('fs')
const student = [{name:"abc",age:30},{name:"def",age:"32"}]
var ps = require("fs")
ps.writeFileSync("student.txt",JSON.stringify(student))
data = ps.readFileSync("student.txt","utf-8")
b  = JSON.parse(data)
console.log(b);
