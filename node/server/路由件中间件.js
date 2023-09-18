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
// GET http://127.0.0.1:8080/index.html HTTP/1.1
app.get('/index.html', (req, res) => {
    res.send('hello index');
})

app.get('/imgs/2123-2023-06-15052425-1686821065576.jpg', (req, res) => {
    res.send('hello img');
})

// POST http://127.0.0.1:8080/users HTTP/1.1
app.post('/users', (req, res) => {
    res.send('hello users');
})

// PUT  http://127.0.0.1:8080/update HTTP/1.1
app.put('/update', (req, res) => {
    res.send('hello update');
})

// PATCH   http://127.0.0.1:8080/patch HTTP/1.1
app.patch('/patch', (req, res) => {
    res.send('hello patch');
})

// DELETE   http://127.0.0.1:8080/delete HTTP/1.1
app.delete('/delete', (req, res) => {
    res.send('hello delete');
})



// 第一个参数端口号，第二个参数回调函数
app.listen(8080, () => {
    // 服务器启动成功后执行
    console.log('http://127.0.0.1:8080');
})