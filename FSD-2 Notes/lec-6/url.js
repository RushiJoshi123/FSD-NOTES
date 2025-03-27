var u = require("url")
var adder = "https://localhost:8080/default.html?year=2025&month=feb#hello"
var q = u.parse(adder,true)
console.log(q)
var qdata = q.query
console.log(qdata.year);
console.log(q.hash);
console.log(qdata.year % 4 == 0 ? "This is leap yaer": "This is not an leap year ");
