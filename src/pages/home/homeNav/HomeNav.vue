<template>
	<div class="homeNav">
    <ul class="navList">
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <p>新品首发</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <span>新品首发</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <p>新品首发</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <p>新品首发</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <p>新品首发</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="./star24_half@2x.png" alt="">
          <p>新品首发</p>
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
       ...mapState({
         homeData: state=>state.home.homeData
       })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeNav
    .navList
      display flex
      flex-wrap wrap
      margin-bottom 40px
      li
        width 110px
        height 110px
        margin 10px 20px 0
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 100%
            height 100%
          p
            color #333
            font-size 24px
       
</style>
