const fs = require('fs')
class elder{
    constructor(name,age){
        this.name = name ; 
        this.age = age ; 
    }
}
const isEldest = elders =>{
let eldest  = elders[0]
for(const person of elders){
    if( person.age> eldest.age ){
        eldest = person 
    }
}
return eldest 
}

const elders = [
    new elder("name1",33),
    new elder("name2",34),
    new elder("name3",35),
    new elder("name4",36),
]
const eldestPerson = isEldest(elders)
const string = `The eldest person name is : ${eldestPerson.name} and his/her age is ${eldestPerson.age}`
console.log(string);
fs.writeFile('text.txt',string,'utf-8',(err)=>{console.log("Written Successful ! ");
})

