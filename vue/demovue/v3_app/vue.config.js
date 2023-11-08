const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1',
    // https:true,
    port: 8008,
    client: {
      webSocketURL: 'ws://127.0.0.1:8008/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
