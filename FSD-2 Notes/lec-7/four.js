// write a node js program to load a simple html file
// from static url on node js server and print its content as html content
var h = require("http");
var fs = require("fs");
var url = require("url");
h.createServer((req, res) => {
  var q = url.parse(req.url, true);
  data = fs.readFileSync("." + q.pathname);
  res.writeHead(200, { "content-type": "text/html" });
  res.write(data);
  res.write("<h1>Homepage</h1>");
  res.end();
}).listen(6045);
