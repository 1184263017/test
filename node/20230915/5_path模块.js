const path = require('path');

// const p1 = path.join('a','b','c','d');
// const p1 = path.join('../a/b/c','./b/c','../c','d');




const p1 = path.resolve('../a/b/c','./b/c','../c','d');
console.log(p1);