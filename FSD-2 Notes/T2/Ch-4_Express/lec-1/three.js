var express = require('express')
var app = express()
student = {name:"abc", age:28}
app.get('/',(req,res)=>{
       // res.write(JSON.stringify(student))
       // res.send()
       res.json(student)
}).listen(5004,()=>{console.log("server started !! ");
})