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
// params:路径参数匹配/:代表后面的值为参数，可被接收在params中
app.get('/users/:id/:name', (req, res) => {
    res.send(req.params);
});
app.get('/userinfo/:p1/cid/:p2', (req, res) => {
    res.send(req.params);
});


// query:获取get传参的参数
app.get('/get', (req, res) => {
    res.send(req.query);
});


// urlencoded:编码的数据传参
app.use(express.urlencoded());
app.post('/urlencoded', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.send(req.body);
});


// json:json传参
app.use(express.json());
app.post('/json', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.send(req.body);
});


// header:编码的数据传参
app.post('/header', (req, res) => {
    console.log(req.headers);
    res.send(req.headers);
});

// 第一个参数端口号，第二个参数回调函数
app.listen(8080, () => {
    // 服务器启动成功后执行
    console.log('http://127.0.0.1:8080');
})