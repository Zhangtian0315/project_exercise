<template>
	<div class="recongiseContainer">
    <HeaderSlot>
      <div slot="find" @click="flag=true" :class="{active:flag}">
        <span @click="$router.replace('/recognize/recommend')">发现</span>
      </div>
      <div slot="choose" @click="flag=false" :class="{active: !flag}">
        <span @click="$router.replace('/recognize/others')">甄选家</span>
      </div>
    </HeaderSlot>
    
    <div class="recongiseNav">
      <ul class="navList">
        <li v-for="(tab,index) in tabs" @click="switchTab(tab.tabId)"
            :class="{isActived:currentTab===tab.tabId}"
        >{{tab.tabName}}</li>
        
      </ul>
    </div>
    <div class="recongiseContent">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "Recognise",
    data(){
      return{
        flag:true,
        currentTab:9
      }
    },
    async mounted() {
      this.$store.dispatch('getRecongiseTab')
     this.$nextTick(()=>{
       if(!this.bscroll){
         this.bscroll=new BScroll('.recongiseNav',{
           el:'.recongiseNav',
           click:true,
           scrollX:true,
         })
         this.scroll.on('touchend', (pos) => {
           // 下拉动作
           if (pos.y > 50) {
             this.loadData()
           }
         })
       }else{
         this.bscroll.refresh()
       }
     })
    
    },
    computed:{
      ...mapState({
        tabs:state=>state.recognise.tabs
      })
    },
    methods:{
      switchTab(tabId){
       this.currentTab=tabId
        switch (tabId) {
          case 9: {    // 推荐
            this.$router.replace("/recognize/recommend");
            break
          }
          case 14: {    // 好货内部价
            this.$router.replace("/recognize/others");
            break
          }
          case 12: {    // 回购榜
            break
          }
          case 7: {    // 晒单
            this.$router.replace("/recognize/others");
            break
          }
          case 18: {    // 开发者日记
            this.$router.replace("/recognize/others");
            break
          }
        
          case 4: {    // 达人
            this.$router.replace("/recognize/others");
            break
          }
          case 13: {    // 上新
            this.$router.replace("/recognize/others");
            break
          }
          case 6: {    // HOME
            this.$router.replace("/recognize/others");
            break
          }
          default: {
            console.log("Router Switch Error.")
            this.$router.replace("/recognize/others");
          }
        }
      }
    }
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .recongiseContainer
    width 100%
    div
      &.active
        font-size 40px
        font-weight 700
        color #b4282d
    .recongiseNav
      bottom-border-1px(#d9d9d9)
      top-border-1px(#d9d9d9)
      position fixed
      top 88px
      left 0
      height 75px
      width 100%
      background #fff
      .navList
        width 1160px
        height 75px
        li
          float left
          font-size 28px
          height 75px
          line-height 75px
          margin 0 30px
          box-sizing border-box
          &.isActived
            color  #b4282d
            border-bottom 6px solid #b4282d
    .recongiseContent
      width 100%
      min-height 1332px
      box-sizing border-box
      padding 162.5px 0 100px 0
      
</style>
