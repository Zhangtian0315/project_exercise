<template>
 <div class="homeContainer">
   <Swiper/>
   <div class="homeMain">
     <ul class="listText">
       <li>网易自营品牌</li>
       <li>30天无忧退货</li>
       <li>48小时快速退款</li>
     </ul>
   </div>
   <HomeNav/>
   <div class="flashSale">
     <img src="https://yanxuan.nosdn.127.net/02c975c2c8ef58225f1acafea7d41152.png" alt="限时抢购">
   </div>
  
   <Recommend/> <!--购物导航榜单-->
  
   <Split />
  
   <PersonalShop/> <!--私人定制-->
  
   <Split />
  
   <FlashSale/> <!--限时抢购-->
  
   <Split />
  
   <NewGoods/> <!--新品首发-->
   
   <Split />
  
   <PopularItem/> <!--人气推荐-->
  
   <Split />
  
   <TopicList/> <!--专题精选-->
   
   <CategoryModule/>
  
   <CopyRight/>
 </div>
 
</template>

<script>
  import Swiper from './swiper/swiper'
  import HomeNav from './homeNav/HomeNav'
  import Recommend from './recommend/Recommend'
  import PersonalShop from './personalShop/PersonalShop'
  import FlashSale from './flashSale/FlashSale'
  import NewGoods from './newGoods/NewGoods'
  import PopularItem from './popularItem/PopularItem'
  import TopicList from './topicList/TopicList'
  import CategoryModule from './categoryModule/CategoryModule'
  import CopyRight from './copyRight/CopyRight'
  export default {
    name: "Home",
    components:{
      Swiper,
      HomeNav,
      Recommend,
      PersonalShop,
      FlashSale,
      NewGoods,
      PopularItem,
      TopicList,
      CategoryModule,
      CopyRight
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
    .flashSale
      width 100%
      height 160px
      margin-top 40px
      img
        width 100%
        height 100%
  
        
    
</style>
