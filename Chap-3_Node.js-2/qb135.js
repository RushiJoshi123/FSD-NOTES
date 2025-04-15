const { log } = require('console');
const h = require('events')
const em = new h();

function eventOne(){console.log("event one is called");}
function eventTwo(){console.log("event two is called  !");}

em.on("myEvent",eventOne)
em.on("myEvent",eventTwo)

em.emit('myEvent')

console.log(`Current event listner count : ${em.listenerCount('myEvent')}`);
console.log("removed the second listner !! ");

em.removeListener('myEvent',eventTwo)
console.log(`Current event listener count : ${em.listenerCount('myEvent')}`);



