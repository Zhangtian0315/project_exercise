<template>
	<div class="recommendContainer">
    <div class="recommendContent">
      <Split></Split>
      <ul v-for="(recommendItem,index) in recommendData" :key="index">
        <li v-for="(topic,index) in recommendItem.topics" :key="index">
          <Third v-if="topic.style===0" :topic="topic"></Third>
          <First v-if="topic.style===1" :topic="topic"></First>
          <Second v-if="topic.style===2" :topic="topic"></Second>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapState} from 'vuex'
  import First from './components/First'
  import Second from './components/Second'
  import Third from './components/Third'
  export default {
    name: "Recommend",
    components:{
      First,
      Second,
      Third
    },
   async mounted() {
     await this.$store.dispatch('getRecommendData')
     
     if(!this.scroll){
       this.$nextTick(()=>{
         this.scroll=new Bscroll('.recommendContainer',{
           el:'.recommendContainer',
          click:true,
          scrollY:true
         })
       })
     }
    },
    computed:{
      ...mapState({
        recommendData:state=>state.recognise.recommendData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendContainer
    width 100%
    max-height 1070px
    overflow hidden
    box-sizing border-box
    padding-top 30px
    font-size 28px
    background-color: #fff
    .recommendContent
      width 100%
    
</style>
