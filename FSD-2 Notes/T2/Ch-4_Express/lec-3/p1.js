// write express script to get form data using get method and display data in JSON format in next page named 
// process_get()
var express = require("express")
var app = express()
app.use(express.static(__dirname,{index:'p1.html'}))
app.get('/process_get',function(req,res){
response={
       fname: req.query.f_name,
       lname: req.query.l_name
}
console.log(req.query);
res.send(response)

})
app.listen(8800,()=>{console.log("server started !!! ");
})
