<template>
  <div class="header_slot_box">
    <div class="left_box" @click="$router.replace('/home')">
      <i class="iconfont icon-icon_home"></i>
    </div>
    <div class="center_box">
      <slot name="netease"></slot>
      <slot name="find"></slot>
      <slot name="choose"></slot>
    </div>
    <div class="right_box">
      <i class="iconfont icon-search" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche2" @click="$router.replace('/shopcar')"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSlot'
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header_slot_box
    position fixed
    top 0
    left 0
    width 100%
    height 88px
    padding 0 8px
    box-sizing border-box
    font-size 42px
    display flex
    align-items center
    justify-content space-between
    background-color: #fafafa
    .left_box
      margin-left 24px
      i
        font-size 51px
        line-height 75px
    .center_box
      width 60%
      margin-left 36px
      font-size 28px
      display flex
      justify-content center
      align-items center
      .netease
        font-size 40px
        font-weight 700
        color #000
      span:first-child
        width 50%
      span:last-child
        width 50%
        margin-left 36px
      span.active
        font-size 36px
        font-weight 700
        color $themeColor
    .right_box
      i
        font-size 51px
        margin-right 24px
</style>
