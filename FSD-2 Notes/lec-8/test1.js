var a = require("./test.js")
console.log(a.add(10,15));

console.log(a.s(10,34));
console.log(a.m(10,34));

var{s,m} = require("./test.js")
console.log(s(10,7));
