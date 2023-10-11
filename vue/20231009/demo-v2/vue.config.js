const {
  defineConfig
} = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置端口 host 静态目录
  devServer: {
    port: 8088,
    host: '127.0.0.1',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // 路由钩子
    onBeforeSetupMiddleware({app}) {
      app.get('/users', function (req, res) {
        res.send('1111')
      });
    }
  }
})