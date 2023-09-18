const fs = require('fs');

fs.readFile('./1_node运行.js', (error, data) => {
    console.log(error); //null或new Error()
    console.log(data.toString());
}) //cat more