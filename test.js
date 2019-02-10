const b = 1549256400000;
const w = 604800000;

const d = new Date().getTime();

var c = b;
while(c < d) c += w;

console.log(c);
console.log(b+w);