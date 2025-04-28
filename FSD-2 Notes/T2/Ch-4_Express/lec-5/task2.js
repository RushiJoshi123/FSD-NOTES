// task1 : 
// create one html file which contains one text field 
// for name email and checkbox for subscription html file will be loaded on 
// home page 
// email and name fields are required fields  

// task2 : 
//               on the login page welcome user and email id data should be printed
//               a. if user checked the subscription then thankyou for the subscription message will be printed 
//                      and logout link will be displayed under the message 
//                if user clicks logout click then it will be redirect to home page 

//               b. if user has not opt for subscription then you can subscribe to get daily 
//                      updates message will be printed 
//                      and subscribe link will be displayed under the message 

//               c . if user clicks subscribe link then he will be redirect to subscription page and 
//                      in this page thankyou for the subscripition mesage willbe printed 
//                      and logout link will be displayed under the message 

const express = require('express')
const app = express()

app.use(express.static(__dirname,{index:"task2.html"}))
app.use(express.urlencoded())


app.post('/check',(req,res,next)=>{
       if(req.body.name=="admin"){
       next()
       }
       else{
              res.set('content-type','text/html')
              res.write(`<h2 style="color:red";> Login through admin </h2>`)
              res.send()
       }
})
app.post('/check',(req,res)=>{
 
       res.write('<h1> Welcome ' + req.body.name +'</h1>')
       res.send()
})

app.listen(4000)

// in that there are two fields 
// user passwrod and submit button 
// it should jump on check page using post method if user name is admin 
// then jump to next midddle ware to print welcome admin 
// then say if username is not admin then stay on same middleware 
// to print warning message in red color  
