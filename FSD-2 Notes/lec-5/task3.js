// create a folder with name fsd2 also create a file named temp.txt 
// inside that folder now check if available physical memory of the system 
// is greater than 1gb then write sufficient memory else write insufficient memory in file

var os = require('os')
var fs= require('fs')
freemem = os.freemem()/1024**3
console.log(freemem > 1 ? "Sufficient": "Insufficient memory");
// fs.mkdirSync("fsd")
if(freemem >1){fs.writeFileSync("fsd/temp.txt","sufficient memory")}
else{fs.writeFileSync("fsd/temp.txt","Insufficient memory")}