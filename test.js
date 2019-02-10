var d = new Date();
var c = new Date();
c.setHours(24,0,0,0);

console.log(c);

const start = d.getTime() + (7-d.getDay())*24*60*60*1000 + (c.getTime() - new Date().getTime());

console.log(start);