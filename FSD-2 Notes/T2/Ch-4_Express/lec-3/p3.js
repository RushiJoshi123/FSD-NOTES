// write express js script to print message in next line spliting by 
// . and use get method to submit the data 
// html file contains form of text area for the message and submit button 
var express = require('express')
var app = express()
app.use(express.static(__dirname,{index:'p3.html'}))
app.get('/login',(req,res)=>{
       res.set('content-type','text/html')
       t1 = (req.query.message).split('.')
       for(i in t1){
              res.write(t1[i]+"<br>")
       }
       res.send()
})
app.listen(2000,()=>{console.log("server started !!! ");
})