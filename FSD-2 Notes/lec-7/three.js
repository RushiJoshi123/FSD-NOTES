// write a node js program to load a simple html file 
// from static url on node js server and print its content as html content 
const h = require('http')
var fs = require('fs')
var url = require('url')
var add = "http://localhost:5000/one.html"
// static url 
h.createServer((req,res)=>{
    var q = url.parse(add,true)
    data = fs.readFileSync("."+q.pathname)
    res.writeHead(200,{"content-type":"text/html"})
    res.write(data)
    res.write(" <h1>Homepage</h1>")
    res.end()
}).listen(5000);