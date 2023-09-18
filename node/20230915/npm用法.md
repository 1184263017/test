## npm 
node package manager node包管理器

1. 下载别人的代码
2. 下载别人的命令行程序
3. 上传自己的包

### npm install 
1. 到npmjs.org下载模块 npm install  模块名
2. 将下载的模块信息保存到package.json的dependencies属性中

### npm install -g   全局安装
1. 到npmjs.org下载模块 npm install -g 模块名
2. 将下载的模块信息保存到nodejs指定目录
3. 一般会给我们的shell安装一个命令

### npm install -f(--force)  强制重新安装
1. 强制重新安装

### 本地包的使用
1. require导入
2. 查帮助文档

### npm install
1. 将dependencies和devDependencies选项中的包重新下载安装一次
2. 在复制项目给其他人时，无需复制node_modules目录

### 安装不同版本 @
1. nmp install name@1.1.1   具体版本
2. nmp install name@latest  最新版本
3. nmp install name@2       安装当前版本的最新版本
4. nmp install name         没有安装记录安装最新版本，有安装记录就安装记录的版本
5. nmp install name^1.2.2   等价于 >=1.2.2 <2.0.0之间的最高版本
6. nmp install name~1.2.2   等价于 >=1.2.2 <1.3.0之间的最高版本

### 安装参数
1. npm install name -S      表示本地,下载代码到node_modules目录,记录到 dependencies
2. npm install name -D      表示本地,下载代码到node_modules目录,记录到 devDependencies

### npm update 
1. 更新模块，但是可能导致版本不适配
2. 可以加-g全局更新

### npm uninstall name
1. 删除模块
2. 可以加-g全局卸载

### npm run(script)
1. npm run 执行 script 自定义的脚本命令
2. 多个脚本命令可以使用&分割
3. npm run start 简写 npm start , npm run test 简写 npm test

### npm info
1. o 命令可以查看每个模块的具体信息

### npm search
1. 用于搜索 npm 仓库


## package.json
1. 记录下载的模块