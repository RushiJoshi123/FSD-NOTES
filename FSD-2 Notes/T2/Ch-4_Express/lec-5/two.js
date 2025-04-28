const express = require('express')
const app = express()

app.use("/xyz",(req,res,next)=>{
       console.log("hello");
       next()
},
(req,res,next)=>{
       res.write("how are you ! ")
       next()
},
(req,res)=>{res.write("bye")
       res.send()
}
)
app.listen(9875)
