const express = require("express");
const dayjs = require("dayjs");
const md5 = require("md5");
// 引入expressjwt
var {
    expressjwt
} = require("express-jwt");
// 引入express-validator验证
var {
    body,
    validationResult
} = require("express-validator");
// 引入json web token
const jwt = require('jsonwebtoken');
// 引入db.json 返回的是一个对象
const db = require("./db.json");
const router = express.Router();

// 一般不使用app创建中间件因为体积太过庞大，所以一般使用轻量级的router
// const app = express();
// app.get('/test',(req,res,next)=>{
//     res.send('hahaha')
// });


// jwt验证
router.use(expressjwt({ //设置秘钥和加密算法
    secret: 'wenyileidashabei',
    algorithms: ["HS256"]
}).unless({ //设置过滤的路径
    path: ['/login']
}));

// 验证用户输入并添加用户
router.post('/users',
    body('email').notEmpty().isEmail().withMessage('邮箱格式有误'),
    body('password').isLength({min:6,max:18}).withMessage('密码必须6-18位'),
    body('phone').isMobilePhone('zh-CN').withMessage('手机号码错误'),
    // 自定义设置验证规则
    body('username').custom(value => {
        // return /^\w{6,18}$/.test(value);
        if (db.users.findIndex(el=>el.username === value) !== -1) {
            throw new Error('用户名重复')
        }
        if (/^\w{3,18}$/.test(value) === false) {
            throw new Error('用户名重复')
        }
        return true;
    }),
    (req, res, next) => {
        // 自己手动验证数据
        // const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)
        // if (isEmail) {
        //     next()
        // }else{
        //     res.status(400);
        //     res.send({
        //         message:'邮箱格式有误',
        //         type:'error'
        //     })
        // }

        // 使用express-validator验证数据
        // 定义规则
        // body('email').isEmail().withMessage('邮箱格式有误')
        const result = validationResult(req);
        if (result.errors.length !== 0) {
            res.status(400);
            res.send(result);
        } else {
            req.body.ctime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
            req.body.password = md5(req.body.password);
            next()
        }
    })

// 用户登录
router.post('/login', (req, res, next) => {
    const {
        username = null,
            password = null
    } = req.body;
    const index = db.users.findIndex(el => el.username === username && el.password === md5(password))
    if (index == -1) {
        res.send({
            message: '用户名或密码错误',
            token: null
        });
    } else {
        // jwt 签名(生成一个不能被破解的字符串)
        const privateKey = 'wenyileidashabei';
        const token = jwt.sign({ //加密的内容
                username
            },
            privateKey,
            // {//过期时间
            //     expiresIn: 20
            // }
        );

        res.send({
            token,
            message: '登录成功'
        });
    }

});

module.exports = [
    (req, res, next) => {
        // console.log(123);
        next()
    },
    (req, res, next) => {
        // console.log(456);
        next()
    },
    router,
]