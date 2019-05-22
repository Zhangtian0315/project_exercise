<template>
	<div id="headerContainer">
    <div class="headerTop">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
      <div class="search" @click="$router.push('/search')">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
        <span class="text">搜索商品，共22488款好物</span>
      </div>
      <span class="btn" @click="$router.replace('/personal/emailLogin')">登录</span>
    </div>
    <div>
      <div class="headerBottom">
        <ul class="list clearfix">
          <li><a href="javascript:" class="active">推荐</a></li>
          <li><a href="javascript:">居家生活</a></li>
          <li><a href="javascript:">服饰鞋包</a></li>
          <li><a href="javascript:">美食酒水</a></li>
          <li><a href="javascript:">个户清洁</a></li>
          <li><a href="javascript:">母婴亲子</a></li>
          <li><a href="javascript:">运动旅行</a></li>
          <li><a href="javascript:">数码家电</a></li>
          <li><a href="javascript:">礼品特色</a></li>
        </ul>
      </div>
  
      <div class="right_span">
        <span class="linear"></span>
        <div class="img_box">
          <img :class="{is_open: isOpen}" @click="isOpen=!isOpen" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开"/>
        </div>
      </div>
      <div class="all_nav_box" v-show="isOpen">
        <p>全部频道</p>
        <ul class="all_nav clearfix" ref="allNav">
          <li><a href="javascript:">推荐</a></li>
          <li><a href="javascript:">居家生活</a></li>
          <li><a href="javascript:">服饰鞋包</a></li>
          <li><a href="javascript:">美食酒水</a></li>
          <li><a href="javascript:">个户清洁</a></li>
          <li><a href="javascript:">母婴亲子</a></li>
          <li><a href="javascript:">运动旅行</a></li>
          <li><a href="javascript:">数码家电</a></li>
          <li><a href="javascript:">礼品特色</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Header",
    data(){
      return{
        isOpen:false,
        currentIndex:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        if(! this.bScroll){
          this.bScroll=new BScroll('.headerBottom',{
            click:true,
            scrollX:true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #headerContainer
    position fixed
    top 0
    left 0
    padding 10px 0
    box-sizing border-box
    width 100%
    z-index 2
    background: #fff;
    .headerTop
      display flex
      margin 0 15px
      >img
        display inline-block
        flex 1.5
        height 40px
        margin-right 10px
        margin-top 8px
        vertical-align middle
      .search
        display flex
        justify-content center
        align-items center
        flex 6.5
        height 56px
        background-color: #ededed;
        font-size 28px
        line-height 56px
        border-radius: 4px;
        color: #666;
        >img
          display inline-block
          vertical-align middle
          width 28px
          height 28px
          margin-right 4px
      .btn
        flex 1
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        margin-left: 8px
        font-size 24px
        margin-top 8px
    .headerBottom
      width 100%
      .list
        display flex
        float left
        li
          display flex
          width 150px
          height 66px
          font-size 28px
          justify-content center
          align-items center
          box-sizing border-box
          padding 0 16px
          text-align center
          color #333
          line-height 60px
          margin-right 20px
          a.active
            box-sizing border-box
            min-width 100px
            color #b4282d
            border-bottom 6px solid #b4282d
    .right_span
      display flex
      flex-grow 0
      align-items center
      justify-content center
      position absolute
      top 65px
      right 0
      z-index 2
      .linear
        width 6px
        height 6px
        background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
      .img_box
        width 100px
        height 60px
        text-align center
        background #fff
        display: flex;
        justify-content: center;
        align-items: center;
        >img
          width 28px
          height 28px
          transition transform 300ms linear
          &.is_open
            transform rotateZ(180deg)
    .all_nav_box
      position absolute
      top 68px
      left 0
      width 100%
      background-color #fff
      >p
        height: 60px;
        padding-left: 30px;
        font-size: 28px;
        display flex
        align-items center
      .all_nav
        display flex
        flex-wrap wrap
        justify-content flex-start
        padding-left 15px
        li
          width 165px
          margin 7.5px
          padding 0 16px
          box-sizing border-box
          font-size 28px
          line-height 60px
          color #333
          background-color: #fafafa
          border 2px solid $borderBgc
          border-radius 8px
          display flex
          align-items center
          justify-content center
    
</style>
