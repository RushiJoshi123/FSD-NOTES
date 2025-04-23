// write an express js script to define one json array of three object 
// having properties name and age  
// sort these object according to age if user request sorted names in url then all name 
// along with age should be printed according to decending order of age 
// also display the sorted values on sort page and display the json object 
// on home page 
const express = require('express') ; 
const app = express() 


student = [{name:"abc" ,age:28},{name:"cde",age:30}]
app.get("/home" , (req,res)=>{
       res.set('content-type','text/html')
       res.send(student)
})?
app.get('/sort',(req,res)=>{
       res.set('content-type','text/html')
       var des = student.sort((a,b)=>a.age-b.age)
       res.send(des)
})
app.listen(7544)