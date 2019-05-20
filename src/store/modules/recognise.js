import  {reqTabs,reqRecommendData,
  reqAutoRecommendData,reqCollection} from '../../api/index'
import {GET_TABS,GET_RECOMMEND_DATA,
  GET_MORE_RECOMMEND_DATA,GET_COMMENT_DATA} from '../mutation-types'

const state={
  tabs: [],
  recommendData: [],
  moreRecommendData: {
    hasMore: true,
    result: []
  },
  commentData:{},
}

const actions={
  async getRecongiseTab({commit}) {
    const result = await reqTabs();
    const tabs = result.data

    if (result.code === '200') {
      commit(GET_TABS, {tabs})
    }
  },
  async getRecommendData ({commit}) {    // 推荐
    const result = await reqRecommendData();    // 发送ajax
    const recommendData = result.data

    if (result.code === "200") {
      commit(GET_RECOMMEND_DATA, {recommendData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getMoreRecommendData ({commit},{page, size}) {    // 推荐 - 上拉加载数据
    const result = await reqAutoRecommendData(page, size);    // 发送ajax
    const moreRecommendData = result.data

    if (result.code === "200") {
      commit(GET_MORE_RECOMMEND_DATA, {moreRecommendData})    // 根据返回的数据调用 mutations 更改数据
    }
  },
  async getComments({commit},id=76){
    const result=await reqCollection(id)
    const commentData=result.data
    if(result.code==='200'){
      commit(GET_COMMENT_DATA,{commentData})
    }
  }
}
const mutations={
  [GET_TABS](state,{tabs}){
    state.tabs = tabs
  },
  [GET_RECOMMEND_DATA] (state, {recommendData}) {
    state.recommendData = recommendData    // mutation 直接操作状态
  },
  [GET_MORE_RECOMMEND_DATA] (state, {moreRecommendData}) {
    if (!state.moreRecommendData.hasMore) {
      state.moreRecommendData = moreRecommendData    // 如果 autoRecommendData 还没有数据
    } else if (state.moreRecommendData.hasMore) {
      state.moreRecommendData.result.push(...moreRecommendData.result)    // 如果有数据向其中追加
    }
  },
  [GET_COMMENT_DATA](state,{commentData}){
    state.commentData=commentData
  }
}
const getters={

}

export default {
  state,
  actions,
  mutations,
  getters
}
