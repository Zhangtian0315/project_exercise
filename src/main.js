
import Vue from 'vue'
import 'lib-flexible/flexible'
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
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
