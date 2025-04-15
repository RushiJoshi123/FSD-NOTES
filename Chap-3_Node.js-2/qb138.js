class time { 
    constructor(hour,minutes,seconds){
        this.hour= hour ; 
        this.minutes = minutes ; 
        this.seconds = seconds; 
    }
    timer(p){
        let t = new time() ; 
        t.hour = this.hour + p.hour
        t.seconds = this.seconds + p.seconds 
        t.minutes = this.minutes + p.minutes 
        
        if(t.seconds> 60){
            t.seconds%=60 ; 
            t.minutes++
        }
        if(t.minutes > 60){
            t.minutes%=60;
            t.hour++
        }
        return t 
        }
}


let t1 = new time(13,32,34)
let t2 = new time(16,2,90)
var t3 = t1.timer(t2)
console.log(`${t3.hour} ${t3.minutes} ${t3.seconds}`);
    