# 项目构建和工程化

## webpack 和 vue cli

1. SPA single page application 单文件应用程序
2. 插件机制实现:sass预编译器、ES6->ES5的编译器
3. 打包:多个css合并为一个css、多个js合并为一个js、压缩打包
4. 代码检查
5. 项目初始化
6. 像node那样使用模块系统

## 安装vue-cli
```shell
 npm install -g @vue/cli
```
测试 vue -V 输出版本号 碰到权限问题转cmd在查看

## 构建项目
```shell
vue create 项目名称
```
### 手动安装
1. 选择需要安装的插件模块 Babel(es6->es5),CSS Pre-processors(css预处理器)
2. 选择需要安装的vue版本
3. 选择预处理器类型
4. 文件的存放位置,独立存放还是和package.json混合存放,使用独立存放

### 项目依赖
```json
  "dependencies": {
    // js 核心库 让es6 es5兼容
    "core-js": "^3.8.3",
    // vue版本
    "vue": "^2.6.14"
  },
```

### 开发依赖
```json
  "devDependencies": {
    // es6->es5 整合 core-js 解决兼容问题
    "@vue/cli-plugin-babel": "~5.0.0",
    // web server
    "@vue/cli-service": "~5.0.0",
    // 将sass转为css
    "sass": "^1.32.7",
    "sass-loader": "^12.0.0",
    // 编译.vue文件
    "vue-template-compiler": "^2.6.14"
  }
```

### scripts
```json
  "scripts": {
    // 启动服务器
    "serve": "vue-cli-service serve",
    // 编译打包
    "build": "vue-cli-service build"
  },
```

启动http服务器,类似express,http-server
```shell
npm run serve
```
1. 服务器地址 localhost  127.0.0.1
2. 服务器端口 8080
3. 默认静态目录public http://localhost:8080/index.html

### vue.config.js 配置文件
```js
  devServer: {
    // 端口 默认8080
    port: 8088,
    // 域名 ip 默认localhost
    host: '127.0.0.1',
    static: {
      // 静态目录
      directory: path.join(__dirname, 'public'),
    },
  }
```
配置自定义路由
- onBeforeSetupMiddleware 钩子 表示在所有其他中间件执行完毕之前再执行
- onAfterSetupMiddleware 钩子 表示在所有其他中间件执行完毕之后再执行
```js
  devServer: {
    // 定义路由 http://127.0.0.1:8088/users
    onBeforeSetupMiddleware({app}) {
      app.get('/users', function (req, res) {
        res.send('1111')
      });
    }
  }
```

## 项目运行原理图

- 在src中的js会被自动加载到index.html
- 在静态目录中的任何css或js文件都需要手动加载


## render

1. 构建虚拟dom(手动直接构建,一般不推荐使用)
2. 通过vue实例,构建虚拟dom，vue实例创建可以使用 `.vue` 文件创建

## 单文件组件 `.vue`
> new vue()
1. template(html)
2. script(js) 最重要
3. style(css)

## 组件

1. 组件 = new Vue();vue实例 = `.vue` 文件 = 标签
2. 组件其本质是一个vue实例,一般使用`.vue`文件创建,在调试工具中被表示成一个'html标签'

> 组件(函数,类)思想是一样的,封装代码,提高代码的可复用性,组件可以封装以下业务代码:html、js、css,主要是用来封装ui界面,**界面组件化**

### 组件全局注册

```js
import Vue from 'vue';
import App from './App.vue';
import TsHome from './components/TsHome'
import TsCard from './components/ts-card'

// 驼峰命名
Vue.component('TsHome',TsHome)
// 短横线命名
Vue.component('ts-card',TsCard)

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')
```

### 组件局部注册

1. 全局注册的组件可以在所有 `.vue` 文件中调用
1. 局部注册的组件在哪里注册就在哪里使用

> **全局:** 定义公共组件

> **局部:** 对某一个组件内容进行切割,可能这个组件只适合当前文件调用

#### 组件命名

驼峰法命名(建议使用)
1. `.vue` 文件的命名,多单词,首字母大写 `AbcAbc` 大驼峰法命名
2. 注册组件名和vue文件名保持一致,`Vue.component('abc',abc)`

短横线命名
1. `.vue` 文件的命名,多单词,多个单词使用短横线分割
2. 注册组件名和vue文件名保持一致,`Vue.component('a-bc',abc)`

调用方式
1. 驼峰法命名,支持驼峰法组件标签调用,也支持短横线组件标签调用
2. 短横线命名,只支持短横线标签调用

### Prop 组件属性

#### 大小写
1. 组件内部定义props 选项：小驼峰命名
2. 调用组件标签传递属性参数：短横线

### Prop 类型

1. props 定义方式1 `属性名:类型构造函数`,如果类型不符合,抛出一个警告级错误,不影响程序运行
```js
props: {
    count: Number,
    username: String,
    isAdmin: Boolean,
    info: Object,
    hobbys: Array,
    cb: Function,
  },
```
2.  props 定义方式2(多类型) `属性名:[类型构造函数1,类型构造函数2]`,类型只需符合多类型中的任意一个,否则抛出一个警告级错误,不影响程序运行
```js
 props: {
    count: [Number, String],
  },
```

3.  props 定义方式3(对象写法) `属性名:{type:单类型|多类型,required:必填}`
- type  单类型|多类型(null|undefined表示不限制数据类型)
- required  true/false 必填项
- default 设定默认值,如果没有此属性,那么就使用默认值
- validator 属性值是一个函数,函数参数就是当前传入的属性值,如果返回true通过,否则失败
```js
  props: {
    username: {
      type: String,   // 类型
      required: true, // 必填
      default:'timo', // 默认值
    },
    phone: {
      type: String,
      // 设置属性值验证
      validator: (value) => {
        // value 传入的参数值
        // return true // 通过
        // return false // 失败
        return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value);
      },
    },
  }
```

属性参数值的写法

1. 属性参数的值比较复杂,建议定义成变量
2. 属性参数的个数很多,建议使用 `v-bind` 简写

## 组件实例配置项

### data,methods,computed,watch
```js
data() {
    return {
      title: "hello app",
    };
  },
```
> 实例配置项中的方法和属性只能在当前对象模版中使用


### 组件就是一个函数

```js
// Vue.component(组件名,组件对象)
function 组件名(参数1,参数2,...){
  组件对象
}
// <组件名 参数1='100' 参数2='200'>
组件名(100,200)
```
1. 组件名就是函数名
2. 组件对象就是函数体
3. 注册组件就是定义函数
4. 渲染标签就是调用函数


### 事件分类

1. 预定义事件,有行为触发
2. 自定义事件,不能基于行为触发

#### 自定义事件触发方式

1. 手动直接触发
2. 基于预定义事件间接触发

```html
<!-- Pay.addEventListener('success',say()) -->
<Pay @success="say" />
```

触发:事件绑定在什么对象上就使用什么对象触发

在父节点中获取子节点对象,触发子节点事件,触发过程:
1. 获取 Pay 事件绑定对象
2. 使用$emit(事件名称,数据)方法触发事件,并且通过第二个参数给事件处理函数传递数据

在子节点对象,触发子节点事件,触发过程:

1. 获取 Pay 事件绑定对象,this 保存了组件自己
2. this.$emit(事件名称,数据)方法触发事件


### 事件名

1. 多单词:小驼峰,短横线

### 自定义组件的 v-model

1. 默认要求: 绑定属性必须是value,自定义事件必须是input
2. 如果自定义(修改)默认属性和事件名称,必须使用model选项做映射说明
```js
export default {
  name: "TsButton",
  props: ["valueAbc"],
  model:{
    prop:'valueAbc',
    event:'inputAbc',
  },
  data() {
    return {};
  },
};
```

### ref

获取vue中所有的节点对象(组件节点和DOM节点)

1. 设置标签属性 `ref="ref标识符"` ,ref标识符必须唯一和ID相同
2. 在组件内通过 `this.$refs.ref标识符` 获取节点对象


### v-model

#### 父组件向子组件传递数据

1. props属性传参

#### 子组件向父组件传递数据

1. 自定义事件

### 组件数据双向绑定

1. 设定子组件属性value 属性值绑定到input控件的value属性
2. 父组件调用子组件,绑定子组件事件 input(随意命名)
3. 基于子组件input控件的input事件,触发子组件@input事件

### 将原生事件绑定到组件

1. 事件使用 `native` 修饰符,将事件渗透到组件的根标签
2. 组件内的DOM节点可以通过冒泡触发事件,执行事件处理函数
3. `native` 修饰的事件,最好是一个可冒泡的事件

### sync 语法糖实现数据双向绑定

1. 父->子 属性传参
2. 子->父 自定义事件
3. 子->父的时候,如果绑定自定义事件使用的是 `@update:属性名` ,此时可以省略事件绑定不写,在属性传参时使用语法糖 `属性.sync=`

v-bind 配合使用:
1. 组件传递多个属性,可以将多个属性映射定义成一个对象
2. 使用 `v-bind='对象名'` 传递属性
3. 如果需要双向数据绑定,可以使用 `v-bind.sync='对象名'`



### 语法糖v-model

如果子组件自定义属性名是value,自定义事件名是@input,此时可以使用语法糖 v-model

## 插槽

### slot 插槽

是vue系统内置组件,直接使用

### slot 特点

注册标签名 `<slot>` ,但缺少模版 `<template>` 内容

### slot 一些理解

1. 是子组件的一个特殊属性
2. 他可以接收复杂的大量的HTML格式的字符串
3. 通过组件标签对`<x></x>`内写内容,给插槽传递数据(插槽的内容分发)

### 编译作用域

变量在那个文件中那么就在那个文件中编译

### 后备内容

1. 好比函数参数的默认值
2. 如果没有分发内容.默认展示后备内容

