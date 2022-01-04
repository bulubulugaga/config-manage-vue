const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));
  },
  devServer: {
    open: true,
    hotOnly: true,
    https: false,
    host: '0.0.0.0',
    port: 8088,
    // 设置代理
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API,
        pathRewrite: {
          '^/api': ''
        },
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  }
};
