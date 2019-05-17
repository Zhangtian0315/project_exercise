import {RECEIVE_HOMEDATA} from './mutation-types'
export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  }
}
