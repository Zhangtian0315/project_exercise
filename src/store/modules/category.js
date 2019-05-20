import ajax, {reqCategoryList} from '../../api/index'
import {RECEIVE_CATEGORY_LIST} from '../mutation-types'

const state={
  categoryList:[]
}

const actions={
  async getCategoryList ({commit}) {
    const result = await reqCategoryList();
    const categoryList = result.data

    if (result.code === 0) {
      commit(RECEIVE_CATEGORY_LIST, {categoryList})
    }
  },
}
const mutations={
  [RECEIVE_CATEGORY_LIST](state,{categoryList}){
    state.categoryList = categoryList
  },
}
const getters={

}

export default {
  state,
  actions,
  mutations,
  getters
}
