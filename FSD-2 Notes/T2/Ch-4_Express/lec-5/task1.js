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

app.use(express.static(__dirname,{index:"task1.html"}))
app.use(express.urlencoded())

app.post('/login',(req,res,next)=>{
       res.set('content-type','text/html')
       res.write('welcome: '+req.body.name)
       res.write('email id : '+ req.body.email)
       next()
})
app.post('/login',(req,res)=>{
       if(req.body.newsletter=='on'){
              res.write('Thank You for subscribing !!! ')
       }
       else{
          
              res.write(`<h2> you can subscribe for dauily updates !</h2> <a href ="/subscribe"> Subscribe</a> `)
       }
       res.send()
})
app.get("/subscribe",(req,res)=>{
       res.set('content-type','text/html')
       res.write(`<h2> Thank you for subscription</h2> <a href ="/"> Logout</a> `)
       res.send()

})
app.listen(4000)

// in that there are two fields 
// user passwrod and submit button 
// it should jump on check page using post method if user name is admin 
// then jump to next midddle ware to print welcome admin 
// then say if username is not admin then stay on same middleware 
// to print warning message in red color  
