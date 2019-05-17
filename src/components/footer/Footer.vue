<template>
	<div id="footerContainer">
    <ul class="footerList" >
      <li class="item" @click="$router.replace('/')" :class="{active:$route.path==='/home'}">
        <i class="icon" :class="$route.path==='/home'?'icon1-active':'icon1'"></i>
        <span>首页</span>
      </li>
      <li class="item" @click="$router.replace('/category')" :class="{active:$route.path==='/category'}">
        <i class="icon" :class="$route.path==='/category'?'icon2-active':'icon2'"></i>
        <span>分类</span>
      </li>
      <li class="item" @click="$router.replace('/recognize')" :class="{active:$route.path==='/recognize'}">
        <i class="icon" :class="$route.path==='/recognize'?'icon3-active':'icon3'"></i>
        <span>识物</span>
      </li>
      <li class="item" @click="$router.replace('/shopcart')" :class="{active:$route.path==='/shopcart'}">
        <i class="icon" :class="$route.path==='/shopcart'?'icon4-active':'icon4'"></i>
        <span>购物车</span>
      </li>
      <li class="item" @click="$router.replace('/personal')" :class="{active:$route.path==='/personal'}">
        <i class="icon" :class="$route.path==='/personal'?'icon5-active':'icon5'"></i>
        <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    padding-top 5px
    top-border-1px(#d9d9d9)
    bottom-border-1px(#d9d9d9)
    width 100%
    height 100px
    position fixed
    left 0
    bottom 0
    .footerList
      display flex
      justify-content space-around
      .item
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        font-size 24px
        &.active
          color #b4282d
        .icon
          width 40px
          height 40px
          display inline-block
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
          margin 5px 0 3px 0
        .icon1
          background-position 0 -247px
        .icon1-active
          background-position 0 -197px
        .icon2
          background-position 0 -147px
        .icon2-active
          background-position 0 -95px
        .icon3
          background-position 0 -347px
        .icon3-active
          background-position 0 -300px
        .icon4
          background-position 0 -47px
        .icon4-active
          background-position 0 2px
        .icon5
          background-position 0 -448px
        .icon5-active
          background-position 0 -398px
    
    
</style>
