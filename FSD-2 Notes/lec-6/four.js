var http = require("http")
http.createServer(function (req,res){
       res.writeHead(200,{'Content-Type': 'Text/html'});
       res.write(req.url)
       res.end("url fetched")
}).listen(5334)