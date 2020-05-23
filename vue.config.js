const fs = require('fs')
const path = require('path')
let baseConfig = require('./src/config/index')
const resolve = file => path.resolve(__dirname, file)
const { copyValue } = require('./src/common/utils/file')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
if (fs.existsSync(resolve('./project.config.js'))) {
  const projectConfig = require('./project.config.js')
  copyValue(projectConfig, baseConfig)
}
process.env.VUE_APP_CONFIG = JSON.stringify(baseConfig)
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/uni.scss";$sprite-url: "${baseConfig.SPRITE_URL}";$popup-url:"${baseConfig.POPUP_URL}";`
      }
    }
  },
  configureWebpack: config => {
    // if (!isProduction) {
    //   return {
    //     optimization: {
    //       minimize: true
    //     }
    //   }
    // }
    let uglifyOptions = {}
    if (isProduction) {
      uglifyOptions = {
        // 生产环境自动删除console
        compress: {
          warnings: false, // 若打包错误，则注释这行
          drop_debugger: true,
          drop_console: true,
          pure_funcs: ['console.log']
        }
      }
    }
    if (process.env.npm_config_report) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions,
          sourceMap: false,
          parallel: true
        })
        // new BundleAnalyzerPlugin()
      )
    }
  }
}
