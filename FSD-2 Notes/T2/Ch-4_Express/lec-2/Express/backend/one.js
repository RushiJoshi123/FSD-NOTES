const express = require('express')
const app = express();
const path = require('path')
const staticPath =  path.join(__dirname,"../frontend")
// app.use(express.static(staticPath))
// or __dirname
// or "frontend"
// or using path module : 
//
// or : 
app.use(express.static(__dirname,'../frontend'))
app.get('/',(req,res)=>{
       res.sendFile(staticPath+"/one.html")

}).listen(7800,()=>{console.log("server started !! ");
})

