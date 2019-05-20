<template>
  <div class="searchContainer">
    <div class="searchTop">
      <div class="imgContainer">
        <img class="searchIcon" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="">
      </div>
      <input type="text" placeholder="美妆护肤 女王专享7折起" v-model="hasValue" @keyup="toSearch">
      <span class="close" v-show="hasValue" @click="hasValue=''"> × </span>
      <span class="cancle" @click="$router.back()">取消</span>
  
      <div class="result_show" v-if="hasValue">
        <ul>
          <li v-for="(item, index) in searchMatch" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="searchBottom">热门搜索</div>
    <ul class="searchList">
      <li v-for="(keyword,index) in keyWords" :class="{active:currentIndex===index-2}">{{keyword}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Search",
    data(){
      return {
        hasValue:'',
        currentIndex:2
      }
    },
    computed:{
      ...mapState(['searchData','searchMatch']),
      keyWords(){
        if(this.searchData.hotKeywordVOList){
          let arrs=[]
          arrs= this.searchData.hotKeywordVOList.reduce((arr,next)=>{
            const word = next.keyword
            arr.push && arr.push(word)
            return arr
          },[])
          return arrs
        }
      }
    },
    async mounted() {
      await this.$store.dispatch('getSearchKey')
     
    },
    methods:{
      toSearch(){
        clearTimeout(this.timerId)
        this.timerId = setTimeout(async ()=>{
          await this.$store.dispatch('getSearchMatch', this.hasValue)
        }, 300)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    height 100%
    width 100%
    background #fff
    .searchTop
      position relative
      display flex
      margin 20px 0 0 30px
      align-items center
      .imgContainer
        display flex
        justify-content center
        align-items center
        width 60px
        height 56px
        background #f4f4f4
        .searchIcon
          width 28px
          height 28px
      input
        background #f4f4f4
        border none
        width 520px
        height 56px
        margin-right 20px
      input::-webkit-input-placeholder
              font-size 28px
              opacity .8
      .cancle
        font-size 28px
        opacity .8
      .result_show
        position absolute
        left 0
        bottom 0
        z-index 1
        width 750px
        min-height 1258px
        box-sizing border-box
        transform translate(-30px ,100%)
        background-color: #f4f4f4
        >ul
          width 100%
          padding 0 30px
          box-sizing border-box
          background-color: #fff
          >li
            width 100%
            height 90px
            border-bottom  1px solid #eee
            font-size 28px
            line-height 120px
      .close
        position absolute
        bottom 7px 0
        right 180px
        width 28px
        height 28px
        font-size 28px
        color #f4f4f4
        background #888
        border-radius 50%
        text-align center
    .searchBottom
        font-size 28px
        color #999
        margin-left 30px
        margin-top 30px
    .searchList
        margin-left 30px
        overflow hidden
        li
          float left
          border 1px solid #999
          border-radius 4px
          height 46px
          font-size 28px
          margin 30px 30px 30px 0
          padding 8px 15px
          color #333
          &.active
            border-color #b4282d
          
        
</style>
