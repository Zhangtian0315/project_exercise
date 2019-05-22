<template>
	<div class="personalContainer">
    <HeaderSlot>
     <div slot="netease" class="title">网易严选</div>
    </HeaderSlot>
    <div class="personalContent" v-if="$route.path==='/personal'">
      <div class="personalImg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <button class="btnPhone" @click="$router.push('/personal/phoneLogin')">
        <span class="iconfont icon-shouji"></span>
        <span>手机号码登录</span>
      </button>
      <button class="btnEmail" @click="$router.push('/personal/emailLogin')">
        <span class="iconfont icon-youxiang"></span>
        <span>邮箱账号登录</span>
      </button>
      <p class="register">手机号快捷注册></p>
      <ul class="personalFooterList">
        <li>
          <span class="iconfont icon-weixin"></span>
          <span>微信</span>
        </li>
        <li>
          <span class="iconfont icon-qq"></span>
          <span>QQ</span>
        </li>
        <li>
          <span class="iconfont icon-weibo"></span>
          <span>微博</span>
        </li>
      </ul>
    </div>
    
    <div class="personalContent" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalContainer
    .title
      font-weight 700
      font-size 40px
      color #000
    .personalContent
      position relative
      height 1266px
      background #F2F5F4
      top 88px
      text-align center
      .personalImg
        display flex
        justify-content center
        align-items center
        margin 0 auto
        width 679px
        height 423px
        >img
          width 268px
          height 90px
      .btnPhone,.btnEmail
        font-size 28px
        color #fff
        border-radius 4px
        background-color transparent
        border 1px solid #b4282d
      .btnPhone
        margin-top 32px
        width 670px
        height 94px
        background #b4282d
      .btnEmail
        margin-top 32px
        width 670px
        height 94px
        color #b4282d
      .register
        margin-top 32px
        font-size 28px
      .personalFooterList
        display flex
        justify-content center
        align-items center
        width 100%
        margin-top  400px
        >li
          display flex
          justify-content center
          align-items center
          width 180px
          height 40px
          font-size 28px
          color #7f7f7f
          border-right 1px solid #979797
          .iconfont
            width 20px
            height 20px
            margin-right 20px
            margin-bottom 10px
</style>
