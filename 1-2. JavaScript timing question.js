setTimeout(() => console.log('A'), 0);
console.log('B');
setTimeout(() => console.log('C'), 100);
setTimeout(() => console.log('D'), 0);
let i = 0; 
while (i < 10) { // Assume this takes ~500ms let ignore = Math.sqrt(i); i++;
    let ignore = Math.sqrt(i); 
    i++;

}
console.log('E');

// Log  B    E     A     D     C
//Time 1ms 501ms 502ms 502ms 502ms


