
const file = require('./qb133_2.js')
const h = require('http')

h.createServer((req,res)=>{
    for(let i=0 ; i<51 ; i++){
        if(file.isPrime(i)){
            res.write(`This is the prime number : ${i}`+'\n')
        }
       }
       res.end()
}).listen(5000,()=>{console.log('server started ');
})

