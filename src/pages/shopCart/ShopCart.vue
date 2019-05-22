<template>
  <div class="shopCartContainer">
    <div class="shopCartTop">
      <div class="left">购物车</div>
      <div class="right">领券</div>
    </div>
    <div class="listWrap">
      <ul class="shopCartList">
        <li>
          <span class="iconfont icon-yuanquanweixuanfuben"></span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span class="iconfont icon-yuanquanweixuanfuben"></span>
          <span class="text">48小时快速退款</span>
        </li>
        <li>
          <span class="iconfont icon-yuanquanweixuanfuben"></span>
          <span class="text">满88元免邮费</span>
        </li>
      </ul>
      <div class="cartImg">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      </div>
      <div class="addText">去添加点什么吧</div>
      <button class="btn" @click="$router.replace('/personal')">登录</button>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: "ShopCart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCartContainer
    width 100%
    .shopCartTop
      width 100%
      height 88px
      background-color #fff
      padding 0 30px
      box-sizing border-box
      line-height 88px
      .left
        float left
        font-size 36px
      .right
        float right
        font-size 30px
        color #b4282d
    .listWrap
      position fixed
      left 0
      bottom 0
      top 88px
      padding-top 30px
      background-color #f4f4f4
      text-align center
      .shopCartList
        display flex
        justify-content space-around
        width 750px
        height 70px
        li
          color #666
          .iconfont
            font-size 2px
          .text
            font-size 24px
        
  
      .cartImg
        display flex
        justify-content center
        align-items center
        width 100%
        >img
          width 248px
          height 248px
          margin-top 375px
      .addText
        margin-bottom 40px
        font-size 28px
        color #999
      .btn
        width 480px
        height 92px
        background-color #b4282d
        border 0
        font-size 30px
        color #fff
  
</style>
