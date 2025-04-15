const fun = require('./qb130_1')
function findSpecialNumbers(){
    let specialNumbers = []
    for(let i=0 ; i<=100 ; i++){
     if(fun.isSpecial(i)){
        specialNumbers.push(i)
     }
    }
    return specialNumbers
}

console.log(findSpecialNumbers());
console.log("the average of the numbers is : ", fun.average(findSpecialNumbers()));

