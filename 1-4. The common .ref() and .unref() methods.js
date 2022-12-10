const t1 = setTimeout(() => {}, 1_000_000); 
// 1) There is now one asynchronous operation keeping Node.js alive. The process should end in 1,000 seconds.
const t2 = setTimeout(() => {}, 2_000_000); 
// 2) There are now two such operations. The process should now end in 2,000 seconds.
// ... 
t1.unref();
// 3) The t1 timer has been unreferenced. Its callback can still run in 1,000 seconds, but it won’t keep the process alive
// ... 
clearTimeout(t2);
// 4) The t2 timer has been cleared and will never run. A side effect of this is that it no longer keeps the process alive.
// 5) With no remaining asynchronous operations keeping the process alive, the next iteration of the event loop ends the process.