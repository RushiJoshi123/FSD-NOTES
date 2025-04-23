var express = require('express')
var app = express(); 
app.get("/",(req,res)=>{
       res.set("content-type","text/plain")
       res.send("<h1>Hello</h1>")
})

app.get("/about",(req,res)=>{
       res.set('content-type','text/html')
       res.write('hello')
       res.send("<h1>hello from home</h1>")
})

app.listen(5504,()=>{console.log("server started !!! ");
})

