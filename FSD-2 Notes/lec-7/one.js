// write an node js script to perform the task as ask : 
// 1. create one page with two links home and about(/about)
// 2. both the pages must contain html type content and add required content on both the pages 
// 3. if user add any other required path then he or she will be redirected to a page and plain message will be displayed of PAGE NOT FOUND 

const http= require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'Text/html'})
        res.write("<h1>Homepage</h1><div><ul><li><a href='/about'>Home</a></li><li><a href='/'>About</a></li></ul></div>")
        res.end()
    }
    else if(req.url === "/about"){
        res.writeHead(200,{'Content-Type':'Text/html'})
        res.write("<h1>About page </h1>")
        res.end()
    }
    else{
     res.writeHead(200,{'Content-Type':'Text/html'})
     res.write("Eror 404 Page not found ! ")   
     res.end("Please check the url  !")
    }
}).listen(2000,()=>{console.log("page loaded ! ");
})

