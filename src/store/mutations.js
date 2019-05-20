import {RECEIVE_HOMEDATA,RECEIVE_SEARCH_KEY,RECEIVE_SEARCH_MATCH} from './mutation-types'
export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_SEARCH_KEY](state,{searchData}){
    state.searchData = searchData
  },

  [RECEIVE_SEARCH_MATCH](state,{searchMatch}){
    state.searchMatch = searchMatch
  }

}
