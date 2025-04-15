const u = require('url')
const fs = require('fs')
const url  = 'http://example.com/page?name=JohnDoe&age=25&city=NewYork';
const urlObject = u.parse(url,true)
console.log(JSON.stringify(urlObject.query));
fs.writeFile('text.txt',JSON.stringify(urlObject.query),(err)=>{console.log(err);
})


