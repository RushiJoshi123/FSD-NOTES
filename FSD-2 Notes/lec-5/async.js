// Sync: 
const fs = require('fs')
fs.writeFileSync("Sync.txt","Hi")
console.log("Sync.write operation")
console.log("outside")

// Async:
fs.writeFile("Async.txt","Hi",function(err){
       console.log(err? "error": "Async.write operation")
})