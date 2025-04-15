// functions : isReverse , isSpecial , average 
function reverse(num) {
    return parseInt(num.toString().split('').reverse().join(''),10)
}
function isSpecial(n){
    nSquare = n*n ; 
    nrevSquare = reverse(nSquare)
    nReverseSquare = reverse(n)*reverse(n);
    return nrevSquare === nReverseSquare ; 
}
function average(numbers) {
    let sum = 0 ; 
    return numbers.reduce((a,b) => a+b,0)/numbers.length
}
module.exports ={
    reverse,isSpecial,average
} 

