const fs = require('fs')
const h = require('http')
// const add = (a,b)=>{return(a+b)}
// module.exports.add = add; 

const sub = (a,b)=>{return(a-b)}
const mul = (a,b)=>{return(a*b)}

module.exports.s = sub;
module.exports.m = mul; 
const name = "hello"
const div = (a,b) =>{return(a/b)}
module.exports = {sub,mul,name}


exports.add = function(x,y){return x+y}