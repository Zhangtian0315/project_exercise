<template>
	<div class="homeNav">
    <ul class="navList" v-if="homeData.kingKongModule">
      <li v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
        <a href="javascript:">
          <img  :src="item.picUrl" :alt="item.text">
          <p>{{item.text}}</p>
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "HomeNav",
    async mounted(){
      await this.$store.dispatch('getHomeData')
    },
     computed:{
       ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeNav
    width 100%
    height 340px
    .navList
      display flex
      flex-wrap wrap
      li
        width 110px
        height 110px
        margin 50px 20px 0
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 100%
          height 100%
          img
            width 100%
            height 100%
          p
            color #333
            font-size 24px
            margin-top 5px
       
</style>
