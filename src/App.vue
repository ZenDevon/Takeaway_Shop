<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide'
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style scoped lang="stylus">
#app 
  width 100%
  height 100%
  background #f5f5f5
</style>