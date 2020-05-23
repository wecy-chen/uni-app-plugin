import Vue from 'vue'
import App from './App'
// h5调试控制台
// #ifdef H5
import VConsole from 'vconsole'
// #endif
// #ifdef H5
// eslint-disable-next-line no-new
new VConsole()
// #endif
// 项目配置
Vue.prototype.$config = JSON.parse(process.env.VUE_APP_CONFIG)
// upx比例
Vue.prototype.$rate = Number(
  (750 / Number(uni.getSystemInfoSync().screenWidth)).toFixed(2)
)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
