import {RECEIVE_HOMEDATA} from './mutation-types'
import {reqHomeData} from '../api/index'
export default {
  async getHomeData ({commit}) {
    const result = await reqHomeData();    // 发送ajax
    const homeData = result.data

    if (result.code === 0) {
      commit(RECEIVE_HOMEDATA, {homeData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}
