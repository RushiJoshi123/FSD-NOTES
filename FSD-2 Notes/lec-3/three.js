var ps = require("fs")
ps.writeFileSync("s1.txt","50 -1 30 20 2 6")
data = ps.readFileSync("s1.txt","utf-8")
data=  data.split(" ")
d= data.sort((a,b)=> a-b)
console.log(d)
// will return an object 
for (i=0;i<d.length;i++){
       p[i]=  parseInt(d[i])
}
console.log(p)