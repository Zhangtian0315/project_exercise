<template>
  <div class="third">
    <div class="thirdContainer">
      <div class="top">
        <img :src="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">
      {{topic.title}}
      </div>
      <img class="bigImg" :src="topic.picUrl" alt="">
      <div class="bottom">
        <span class="iconfont icon-kanguo_S"></span>
        <span class="view">{{topic.readCount}}人看过</span>
      </div>
    </div>
    <Split></Split>
  </div>
</template>

<script>
  export default {
    name: "Third",
    props:{
      topic:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .third
      width 100%
      .thirdContainer
        width 100%
        padding 30px
        margin-bottom 15px
        box-sizing border-box
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
          margin-top 15px
          font-size 36px
          color #333
        .bigImg
          width 100%
          height 100%
          margin 20px 0
        .bottom
          height 16px
          color #999
          .icon-kanguo_S
            width 28px
            height 28px
          
  
</style>
