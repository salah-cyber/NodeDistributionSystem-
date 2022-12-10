#!/usr/bin/env node
const fs = require('fs');


fs.readFile('./textEX.txt',//1) Node.js reads /textEX.txt. It’s scheduled by libuv
(err, data) => { //4) Once the file is done reading, libuv passes the result to the V8 event loop.
    if (err) throw err; 
    console.log(data);
});


setImmediate(() => { //2) Node.js runs a callback in a new stack. It’s scheduled by V8
    console.log('This runs while file is being read'); //3) Once the previous stack ends, a new stack is created and prints a message.
});

//it checks queue of I/O eventhandlers. If all I/O events in the current snapshot are processed, 
//it executes the callback. It queues them immediately after the last I/O handler somewhat like process.nextTick. So it is faster.














