const isPrime = n=>{
    return [...Array(n).keys()].slice(2).every(i=>n%i!=0)
}
console.log(isPrime(3));
let a = [3,4,4,5,5,4,5]
let sum = 0 ;  
console.log(a.map(a=>sum+=a));
