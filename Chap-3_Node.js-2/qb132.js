const fs=  require('fs')
const h = require('http')
h.createServer((req,res)=>{
    res.writeHead(500,{'content-type':'text/html'})
    fs.readFile('one.html' , (err,data)=>{
        if(err){
            console.log("there is an error");
            
        }
        else{
            res.write(data)
        }
        res.end()
    })
}).listen(2000)