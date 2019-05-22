import ajax from './ajax'
const BASE='/api'
export const reqHomeData=()=>ajax('/home')//mock数据

// 搜索 关键字
export const reqInitSearch = () => ajax(`${BASE}/xhr/search/init.json`, 'POST');
// 获取搜索结果
export const reqSearchResult = (keywordPrefix) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`, {keywordPrefix})

// 获取分类列表
export const reqCategoryList = () => ajax('/category');   // 请求mock数据
//识物 tab
export const reqTabs = () => ajax(`${BASE}/topic/v1/find/getTabs.json`)

// 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(`${BASE}/topic/v1/find/recManual.json`)

// 识物-推荐数据 上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${BASE}/topic/v1/find/recAuto.json`, {page, size, exceptIds})

// 识物-晒单 顶部数据 ---- http://m.you.163.com/topic/v1/look/getCollection.json?id=6
export const reqCollection = (id) => ajax(`${BASE}/topic/v1/look/getCollection.json`, {id})

//识物-晒单 评论数据 https://m.you.163.com/topic/v1/look/getList.json?page=1&size=20&type=1
export const reqComments=({page,size,type})=>ajax(`${BASE}/topic/v1/look/getList.json`,{page,size,type})
