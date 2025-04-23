const { log } = require('console')
var express = require('express')
var app = express()
app.get('/calender/:day/event/:ename',(req,res)=>{
       res.send(req.params)
       console.log(req.params);
       
})
app.listen(6001,()=>{console.log("Server Started");
})