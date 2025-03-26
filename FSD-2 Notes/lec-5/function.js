var fs = require('fs')

fs.writeFile("test1.txt","helllo world",(err)=>{console.log(err? "Error": "written");})

fs.appendFile("test1.txt","GoodMorning",(err)=>{ console.log(err? "append Error": "Appended! ");})

fs.readFile("test1.txt","utf-8",(readEr,data)=>{console.log(readEr?"read Error":"read Succesfull");})

fs.rename("test1.txt","new.txt",(err)=>{console.log(err?"not renamed":"renamed");})

fs.unlink("new.txt",(err)=>{console.log(err? "error ":"unlink sucessfull");})
console.log("last sentance");
