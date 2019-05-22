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
        <li :class="{active:type===1}" @click="handle(1)">最新</li>
        <li :class="{active:type===2}" @click="handle(2)">本月最热</li>
        <li :class="{active:type===3}" @click="handle(3)">晒单合集</li>
      </ul>

      <div class="listWrap">
        <ul class="commentsList">
          <li v-for="(comment,index) in comments.topicList" :key="index" v-if="index%2===0">
            <img :src="comment.bannerInfo.picUrl" alt="">
            <span class="content">{{comment.content}}</span>
            <div class="userInfo">
              <img :src="comment.avatar" alt="">
              <span class="userName">{{comment.nickName}}</span>
              <div class="right">
                <span class="zero">0</span>
                <span class="iconfont icon-weibiaoti-"></span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="commentsList">
          <li v-for="(comment,index) in comments.topicList" :key="index" v-if="index%2===1">
            <img :src="comment.bannerInfo.picUrl" alt="">
            <span class="content">{{comment.content}}</span>
            <div class="userInfo">
              <img :src="comment.avatar" alt="">
              <span class="userName">{{comment.nickName}}</span>
              <div class="right">
                <span class="zero">0</span>
                <span class="iconfont icon-weibiaoti-"></span>
              </div>

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
    name: "others",
    data(){
      return{
        type:1
      }
    },
    computed:{
      ...mapState({
        commentData:state=>state.recognise.commentData,
        comments:state=>state.recognise.comments
      })
    },

    async mounted() {
      await this.$store.dispatch('getComments')
      await this.$store.dispatch('getCommentsList',{page:1,size:20,type:this.type})
     if(!this.scroll){
       this.$nextTick(()=>{
         this.scroll=new Bscroll('.scrollWrap',{
           el:'.scrollWrap',
           click:true,
           scrollX:true
         })
       })
     }else{
       this.scroll.refresh()
     }
    },
    methods:{
      handle(type){
        this.type=type
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
    .commentContainer
      .commentTitle
        width 100%
        text-align center
        font-weight 700
        font-size 32px
        color #333
        margin-top 60px
        margin-bottom 60px
      .buttonList
        display flex
        justify-content space-around
        align-items center
        li
          width 170px
          height 56px
          background-color #f4f4f4
          text-align center
          line-height 56px
          border-radius 4px
          font-size 28px
          &.active
            font-weight 700
            color #b0955f
            background-color: #ffe4af
      .listWrap
        display flex
        padding 30px 10px 10px 10px
        .commentsList
          display flex
          flex-direction column
          margin-left 10px
          li
            width 345px
            >img
              width 100%
              height 100%
              border-radius 15px
            .content
              font-size 24px
              color #333
            .userInfo
              >img
                width 48px
                height 48px
              .userName
                color #7f7f7f
                font-size 24px
              .right
                float right
                font-size 20px
                .icon-weibiaoti-
                  width 16px
                  height 18px


</style>
