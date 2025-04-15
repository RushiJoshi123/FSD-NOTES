const  eventEmitter = require('events')
const em = new eventEmitter()
let a = 1 ;
let b = 2 ; 
let c = 3 ; 
em.on('start', ()=>{
    console.log("Started ! ");
    if(a<0 || b<0 || c<0){
        em.emit('negativeSideFound')
    }
    else{
        perimeter= a+b+c
        console.log(`The perimeter of the triangle is : ${perimeter}`);
        
    }
})
em.on('negativeSideFound',()=>{
    console.log("There is an negative value founded !! ");
    return 
    
})
em.emit('start')