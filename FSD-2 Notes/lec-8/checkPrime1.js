const a = require("./checkPrime.js")
for(i=2;i<=30;i++){
       let x = a(i)
       if(x==true){console.log(i +" prime number ");}
       else{console.log(i+" not prime number ");}
}