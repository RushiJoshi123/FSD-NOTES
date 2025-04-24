// write express js script to perform the task asked bellow : 
//        1. create one html file which contains two numbers type input field's 
//            one drop down which contains options like select addition substraction 
//            multiplication, and division 
//            and one submit button 

//        2. the input field's must contain the value greater than 0 else it will give a
//               message please enter the valid number also user must select any of the formula 
//               from the drop down else give a message 'you are not selected any formula'
//               (message will be displayed on /calc page )
       
//        3. if one formula is selected and numbers are entered then respective calculations will be 
//               performed on the page calc 

//        4. use get method to request data 
var express = require('express')
var app = express()
app.use(express.static(__dirname,{index: "p2.html"}))
// to get to particular html page : this parameter is used ..
app.get('/calc',(req,res)=>{
       res.set('content-type','text/html')
       var n1 = parseInt(req.query.n1)
       var n2 = parseInt(req.query.n2)
       console.log(typeof(req.query.n1));
       console.log(typeof(n2));
       
       if((n1>0) && (n2>0)){
              if(req.query.formula == 'Addition'){
                     a = n1+n2
                     res.write("<h1>Addition is : "+  a +"</h1>")
              }
             else if(req.query.formula == 'Substraction'){
                     a = n1-n2
                     res.write("<h1> Substraction is : "+a +"</h1>")
              }
              else if(req.query.formula == 'Multiplication'){
                     a = n1*n2
                     res.write("<h1>Multiplication is : "+a +"</h1>" )
              }
              else if(req.query.formula == 'Division'){
                     a = n1/n2
                     res.write("<h1>Division is : "+a +"</h1>" )
              }
              else{
                     res.write("<h1>please enter valid value :!!!!!! <h1>")
              }
              res.send()
             
       }
      
})
app.listen(7000,()=>{console.log("server started !!");
})