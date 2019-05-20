<template>
	<div class="cateGoryContainer">
    <div class="top">
      <div class="outer" @click="$router.push('/search')">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        <span>搜索商品，共19999件好物</span>
      </div>
      
    </div>
    
    <div class="main">
      <div class="leftContainer">
        <ul class="leftNav">
          <li v-for="(category,index) in categoryList.categoryL1List"
              :key="index"
              @click="handleLeftItem(index)" :class="{active:currentIndex===index}">{{category.name}}</li>
        </ul>
      </div>
      <div class="rightContainer" v-if="categoryList.categoryL2List">
        <img :src="categoryList.categoryL1List[currentIndex].wapBannerUrl" alt="">
        <ul class="rightList">
          <li v-for="(item,index) in categoryList.categoryL1List[currentIndex].subCateList" :key="index">
            <div>
              <img :src="item.bannerUrl" alt="">
              <div>{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
  </div>
  
  
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return{
        currentIndex:0
      }
    },
   async mounted(){
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll=new Bscroll('.leftContainer',{
            click:true,
            scrollY: true,
          })
        }else{
          this.scroll.refresh()
        }
        
      })
      await this.$store.dispatch('getCategoryList')
    },
    computed:{
      ...mapState({
        categoryList:state=>state.category.categoryList
      })
    },
    methods:{
      handleLeftItem(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .cateGoryContainer
    position relative
    width 100%
    .top
      bottom-border-1px(#d9d9d9)
      position fixed
      top 0
      left 0
      display flex
      justify-content center
      align-items center
      width 100%
      height 88px
      z-index 3
      background-color #fff
      .outer
        display flex
        justify-content center
        align-items center
        width 690px
        height 56px
        background #ededed
        color #666
        font-size 28px
        text-align center
        border-radius 6px
        img
          margin-top 7px
          width 28px
          height 28px
          margin-right 10px
    .main
      .leftContainer
        position fixed
        left 0
        top 125px
        margin 0 0 37px 0
        width 162px
        max-height 1148px
        border-right 1px solid #ededed
        .leftNav
          width 162px
          li
            width 162px
            height 50px
            font-size 28px
            text-align center
            line-height 50px
            margin-bottom 37px
            color #7e8c8d
            &.active
              color #b4282d
              border-left 6px solid #b4282d
            &:last-child
              margin-bottom 0
      .rightContainer
        float right
        width 528px
        height 1088px
        padding 120px 0 0 100px
        font-size 28px
        text-align center
        margin-right 30px
        >img
          width 528px
          height 192px
          background-color: #fff
          margin-bottom 30px
        .rightList
          width 528px
          margin-top 20px
          display flex
          flex-wrap wrap
          >li
            width 144px
            height 216px
            margin-right 32px
            font-size 24px
            >div
              >img
                width 144px
                height 144px
              >div
                width 144px
                height 72px
                text-align center
       
  
</style>
