const express = require('express');
const app = express();

// 静态文件中间件
// 中间件
app.use((req, res, next) => {
    console.log(req.method); //请求方式
    console.log(req.path); //资源路径

    if (req.method === 'GET') {
        const path = req.path;
        // 发送文件给客户端
        res.sendFile(`D:/phpstudy_pro/WWW\/210_code/node/20230918/www/${path}`)
    } else {
        next();
    }


    // 中断中间件的执行， 并返回
    // res.send('hello jack');

    // 通过当前中间件
    // next();
})
// app.use((req, res, next) => {
//     console.log(3);
//     next();
// })
// app.use((req, res, next) => {
//     console.log(4);
//     next();
// })

// 设置根目录(可以设置多个根目录，前面的index会覆盖后面的index,如果前面没有则使用后面的)
// app.use(express.static('D:/phpstudy_pro/WWW/210_code/node/20230918/www'));
// app.use(express.static('./public'));


// 第一个参数端口号，第二个参数回调函数
app.listen(8080, () => {
    // 服务器启动成功后执行
    console.log('http://127.0.0.1:8080');
})