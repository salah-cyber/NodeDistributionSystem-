const fs = require('fs');

setImmediate(() => console.log(4));

Promise.resolve().then(() => console.log(3));

process.nextTick(() => console.log(2));

fs.readFile(__filename, () => { // مش هينفذ اي حاجة جوة الا لما الملق يتقرا 
    console.log(5);
    setTimeout(() => console.log(8));
    setImmediate(() => console.log(7));
    process.nextTick(() => console.log(6));
}); 
console.log(1) 

// process.nextTick() -> promises -> poll(I/O related callbacks) -> check(setImmediate()) -> close(EventEmitter close events) -> Timers -> Pending