// Aim: write express js script to request server to display 
// only age on browser 
const express = require('express')
const app = express()
student = {name:'abc' , age: 30}
app.get('/' , (req,res)=>{
res.write(student.age+"")
res.send()
})
app.get('/j',(req,res)=>{
       res.send(student.age)
})
app.get("/j1",(req,res)=>{
       res.json(student.age)
})
app.listen(7000)