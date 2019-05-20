import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import category from './modules/category'
import recognise from './modules/recognise'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    category,
    recognise
  }
})
