const fs = require('fs');


// 文件不存在则创建文件在写入，文件存在则直接覆盖内容
setTimeout(() => {
    fs.writeFile('./a.html', 'nihao', (e) => console.log(e));
}, 3000);