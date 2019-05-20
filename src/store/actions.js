import {RECEIVE_HOMEDATA,RECEIVE_SEARCH_KEY,RECEIVE_SEARCH_MATCH} from './mutation-types'
import {reqHomeData,reqInitSearch,reqSearchResult} from '../api/index'
export default {

  async getHomeData ({commit}) {
    const result = await reqHomeData();
    const homeData = result.data

    if (result.code === 0) {
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  },
  async getSearchKey ({commit}) {
    const result = await reqInitSearch();
    const searchData = result.data

    if (result.code === '200') {
      commit(RECEIVE_SEARCH_KEY, {searchData})
    }
  },

  async getSearchMatch ({commit},keywordPrefix) {
    console.log(keywordPrefix)
    const result = await reqSearchResult(keywordPrefix);
    const searchMatch = result.data

    if (result.code === '200') {
      commit(RECEIVE_SEARCH_MATCH, {searchMatch})
    }
  },
}
