const isPrime = n =>{
    return [...Array(n).keys()].slice(2).every(i=>n%i !=0)
}
module.exports.isPrime = isPrime  ;