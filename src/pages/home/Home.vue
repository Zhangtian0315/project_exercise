<template>
 <div class="homeContainer">
   <Header/>
   <Swiper/>
   <div class="homeMain">
     <ul class="listText">
       <li>网易自营品牌</li>
       <li>30天无忧退货</li>
       <li>48小时快速退款</li>
     </ul>
   </div>
   <HomeNav/>
 </div>
 
</template>

<script>
  import Header from '../../components/header/Header'
  import Swiper from './swiper/swiper'
  import HomeNav from './homeNav/HomeNav'
  export default {
    name: "Home",
    components:{
      Header,
      Swiper,
      HomeNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeContainer
    width 100%
    .homeMain
      width 100%
      .listText
        display flex
        justify-content space-around
        align-items center
        width 100%
        height 72px
        li
          font-size 24px
          color: #b4282d;
    
    
</style>
