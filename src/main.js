
import Vue from 'vue'
import 'lib-flexible/flexible'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import store from './store/store'
import './mock/mock-server'
import VueLazyLoad from 'vue-lazyload'
import Split from './components/Split/Split'
import loadingGIF from "./common/images/loading.gif"
import HeaderSlot from './components/HeaderSlot/HeaderSlot'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {loading: loadingGIF})



import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

// 提示信息本地化
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    email:'邮箱',
    pwd:'密码'
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => { // 进行验证的回调
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位数字' // 返回提示信息的回调
})

Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
