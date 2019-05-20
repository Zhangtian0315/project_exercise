<template>
	<div class="othersContainer">
    <div class="othersTop">
      <div class="littleTittle">让生活更好的n中方式</div>
      <div class="title">{{commentData.title}}</div>
      <div class="scrollWrap clearfix">
        <ul class="othersList" >
          <li v-for="(comment,index) in commentData.lookList" :key="index">
            <img :src="comment.banner.picUrl" alt="">
          </li>
        </ul>
      </div>
    </div>
    <Split></Split>
    
    <div class="commentContainer">
      <div class="commentTitle">TA们的严选生活</div>
      <ul class="buttonList">
        <li>最新</li>
        <li>本月最热</li>
        <li>晒单合集</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "others",
    computed:{
      ...mapState({
        commentData:state=>state.recognise.commentData
      })
    },
    async mounted() {
     await this.$store.dispatch('getComments')
     if(!this.scroll){
       this.$nextTick(()=>{
         this.scroll=new Bscroll('.scrollWrap',{
           el:'.scrollWrap',
           click:true,
           scrollX:true
         })
       })
     }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .othersContainer
    width 100%
    .othersTop
      .littleTittle
        height 40px
        font-size 28px
        text-align center
        color #7f7f7f
        margin-top 30px
      .title
        text-align center
        height 48px
        font-size 32px
        color #333
        margin-top 30px
        margin-bottom 30px
      .scrollWrap
        margin-bottom 30px
        .othersList
          display flex
          float left
          li
            width 240px
            height 240px
            margin-right 10px
            img
              width 240px
              height 240px
              border-radius 15px
</style>
