var ps = require("fs")
ps.writeFileSync("Node/source.txt","helllo world ")
data = ps.readFileSync("Node/source.txt")
ps.writeFileSync("Node/destination.txt",data)

// read the data from the file and sort the data in acending order 
// using .sort method  
console.log(student.sort((a,b) => a.age-b.age));