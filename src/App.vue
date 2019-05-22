<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"></Header>
    <router-view/>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
  import Footer from './components/footer/Footer'
  import Header from './components/header/Header'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app{
    overflow hidden
  }
</style>
