// to create a folder 
// to create an file inside the folder 
// append the data to that file 
// read the data from that file  
// rename the file 
// delete file  
var ps = require("fs")
// ps.mkdirSync("Node")
// // ps.writeFileSync("Node/write.txt","helllo world ")
// ps.appendFileSync("Node/write.txt","world world world world  ")
// data = ps.readFileSync("Node/write.txt")
// console.log(data.toString())
ps.renameSync("Node/write.txt","readWrite.txt")

write a script to copy the content of one file to another file 
data should be fetched from Source.txt to Destination.txt
