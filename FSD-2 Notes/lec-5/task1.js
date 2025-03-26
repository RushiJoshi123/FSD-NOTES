// write a synchronously data to file named fsd-1.js 
// 1. if no error occurs during the writting process the script should 
// // then append the additional data to the same file 
// finally it should read the content of your file including the newly written 
//  appended data and display it in the console 
var fs = require('fs')
fs.writeFile("fsd-1.txt","helllo world",(err)=>{
       if(err) {console.log("error"); }
              else{
                     fs.appendFile("fsd-1.txt","GoodMorning",(err)=>{
                            if(err){ console.log("error in apped");}
                            else{
                                   fs.readFile("fsd-1.txt","utf-8",(readEr,data)=>{
                                          if(readEr){console.log("error in read");}
                                          else{console.log(data); }
                                   })      
                            }
                     })
              }
       
})

