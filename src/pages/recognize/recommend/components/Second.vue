<template>
    <div class="wrap">
      <div class="secondContainer">
        <div class="secondLeft">
          <div class="top">
            <img :src="topic.avatar" alt="">
            <span>{{topic.nickname}}</span>
          </div>
          <div class="title">{{topic.title}}</div>
          <span class="subTitle">{{topic.subTitle}}</span>
          <div class="bottom">
            <span class="iconfont icon-kanguo_S"></span>
            <span>{{topic.readCount}}人看过</span>
          </div>
        </div>
        <div class="secondRight">
          <img :src="topic.picUrl" alt="">
        </div>
      </div>
      <Split></Split>
    </div>
</template>

<script>
  export default {
    name: "Second",
    props:{
      topic:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .secondContainer
    width 100%
    padding 30px
    margin-bottom 15px
    box-sizing border-box
    display flex
    .secondLeft
      .top
        display flex
        height 56px
        line-height 56px
        >img
          width 54px
          height 54px
          border-radius 50%
          margin-right 10px
        >span
          height 31px
          font-size 28px
      .title
        font-size 36px
        color #333
        margin 15px 0
      .subTitle
        font-size 28px
        color #7f7f7f
      .bottom
        height 16px
        color #999
        margin 20px 0
        .icon-kanguo_S
          width 28px
          height 28px
          
    .secondRight
      width 278px
      height 278px
      >img
        border-radius 6px
        width 278px
        height 278px
   
  
</style>
