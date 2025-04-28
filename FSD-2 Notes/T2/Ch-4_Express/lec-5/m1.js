const express = require('express')
const app = express()

const cb  = (req,res,next)=>{
       console.log("initialised");
       res.set("content-type",'text/html')
       res.write("first")
       next()
}
const cb1 = (req,res,next)=>{
       res.write("second")
       next()

}
app.use("/ee",cb,cb1)


app.get("/ee",(req,res)=>{
       res.write("hello")
       res.send()
})
app.listen(7857)