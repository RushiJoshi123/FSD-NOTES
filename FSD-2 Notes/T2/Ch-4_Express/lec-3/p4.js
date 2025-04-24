var express = require('express')
var app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"p4.html"}))
app.post('/process',(req,res)=>{
       console.log(req.body.fname+ " "+
              req.body.lname
       );
       res.send(req.body.fname)

})
app.listen(2000)