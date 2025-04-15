const fs = require('fs')
class student {
    constructor(name,result){
        this.name = name ; 
        this.result = result ; 
    }

}
function isTopper(students){
    let topper = students[0]
for(const student of students){
    if(student.result > topper.result){
        topper = student; 
    }
}
return topper
}
const students = [
    new student("Alice",34),
    new student("Bob",84),
    new student("shanaya",34),
    new student("Doggy",100),
    
]
const topperStudent = isTopper(students)
console.log(`The topper name is ${topperStudent.name} and his result is : ${topperStudent.result}`);

    fs.writeFile('text.txt',`Topper name : ${topperStudent.name} result: ${topperStudent.result}`,()=>{})