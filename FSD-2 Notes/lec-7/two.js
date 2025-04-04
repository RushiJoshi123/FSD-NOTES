// write a node js script to request server to display json data on browser 
const http  = require('http')
http.createServer((req,res)=>{
if(req.url == '/'){
    const a = {Name : "ABC",Age: 35}
    res.writeHead(200,{"content-type":"application/json"})
    res.write("Thank You")
    res.write(JSON.stringify(a))
    res.end()
}
}).listen(5000)
