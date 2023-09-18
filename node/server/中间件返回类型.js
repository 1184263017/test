const express = require('express');
const app = express();

// 路由中间件
// app.use(({
//     method,
//     path
// }, res, next) => {
//     if (method === 'GET' && path === '/index.html') {
//         // res.sendFile();
//         res.send('hello jack');
//     } else {
//         next();
//     }
// })

// 简写形式
// 返回json格式数据
app.get('/json', (req, res) => {
    res.send({
        name: 'jack',
        ager: 18,
    });
})

// 返回html格式数据
app.get('/html', (req, res) => {
    res.send(`<p>hello</p>`);
})

// 返回xml格式数据
app.get('/xml', (req, res) => {
    res.type('xml')
    res.status(200)
    res.send(`
    <user>
        <username>jack</username>
        <age>20</age>
    </user>
    `);
})


// 返回file格式数据
app.get('/file', (req, res) => {
    res.sendFile('D:/phpstudy_pro/WWW\/210_code/node/20230918/www/imgs/2123-2023-06-15052425-1686821065576.jpg');
})

// 返回状态码
app.get('/status', (req, res) => {
    res.sendStatus(500);
})


// 第一个参数端口号，第二个参数回调函数
app.listen(8080, () => {
    // 服务器启动成功后执行
    console.log('http://127.0.0.1:8080');
})