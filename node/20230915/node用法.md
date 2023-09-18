# Nodejs

## Node.js程序
1. 执行方式 node 文件路径
2. 可以运行原生的JS对象和Nodejs程序提供的API

## 模块系统

### 标准
1. ESM - ECMASctipt Module
2. CommonJS

### exports && require
1. 是一个对象可以定义属性和方法
2. exports会被require导入
3. module.exports 只能写一次，一次只能导出一个值，优先级高于exports 不建议同时写

### os系统模块
1. 提供了一些基本的系统操作函数

### Path 模块
1. 用于处理文件路径(两种方式)
   // D:\phpstudy_pro\WWW\210_code\node\a\b\c\b\c\d
   const p1 = path.resolve('../a/b/c','./b/c','../c','d');
   // ..\a\b\c\b\c\d
   const p1 = path.join('../a/b/c','./b/c','../c','d');

### 文件系统 fs
1. 导入文件系统模块(fs)语法:const fs = require('fs');
2. 读取文件例子 
        fs.readFile('./1_node运行.js', (error, data) => {
                console.log(error); //null或new Error()
                console.log(data.toString());
        }) //cat more
3. 写入文件例子 
        // 文件不存在则创建文件在写入，文件存在则直接覆盖内容
        setTimeout(() => {
            fs.writeFile('./a.html', 'nihao', (e) => console.log(e));
        }, 3000);
