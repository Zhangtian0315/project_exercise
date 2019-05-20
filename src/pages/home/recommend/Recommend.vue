<template>
	<div class="recommendContainer">
    <ul class="recommendList">
      <li class="recommendItem" v-for="(recommendItem,index) in homeData.sceneLightShoppingGuideModule" :key="index">
        <p class="p1">{{recommendItem.styleItem.title}}</p>
        <p class="p2">{{recommendItem.styleItem.desc}}</p>
        <div class="imgContainer">
          <img  v-for="(itemPic, index) in recommendItem.styleItem.itemPicBeanList"
                :key="index"  :src="itemPic.picUrl" >
          
        </div>
      </li>
     
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Recommend",
    async mounted() {
      await this.$store.dispatch('getHomeData')
    },
    computed:{
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendContainer
    width 100%
    margin-bottom 20px
    .recommendList
      display flex
      justify-content center
      flex-wrap wrap
      width 100%
      .recommendItem
        width 343px
        height 260px
        background-color #f5f5f5
        padding: 20px 0 0 20px
        border-radius 4px
        box-sizing border-box
        margin: 4px 0 0 4px
        .p1
          padding-left 10px
          box-sizing border-box
          color #333
          font-size 32px
        .p2
          margin-top 10px
          margin-bottom 10px
          padding-left 10px
          box-sizing border-box
          color #7f7f7f
          font-size 24px
        .imgContainer
          display flex
          width 150px
          height 150px
          img
            width 100%
            height 100%
  
     
</style>
