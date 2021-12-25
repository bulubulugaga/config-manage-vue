const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('api', resolve('src/api'))
      // .set('assets', resolve('src/assets'))
      // .set('components', resolve('src/components'))
      // .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'));
  }
};
