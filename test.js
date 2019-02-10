var d = new Date();
var c = new Date();
c.setHours(24,0,0,0);

const con = ((c-d)+(d.getDate() * 24*60*60*1000));

console.log(d.getTime()+con);

// console.log(d.getDay());

// const start = d.getTime() + (7-((d.getDay()+7)%8))*24*60*60*1000 + (c.getTime() - new Date().getTime());

// console.log(start);

