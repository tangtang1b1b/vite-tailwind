<script setup>
import Navbar from './components/Navbar.vue'
import ScrollTop from './components/ScrollTop.vue'
import HelloWorld from './components/HelloWorld.vue'
import NewModel from './components/NewModel.vue'
import HamberView from './components/HamberView.vue'
</script>

<template>
  <div class="BannerContainer">
    <HamberView />
    <Navbar />
    <HelloWorld />
    <ScrollTop />
    <div class="modelTitle flex justify-center items-center text-2xl font-bold border-b-black border-2">NEW MODEL</div>
  </div>
  <NewModel />
</template>

<style lang="scss" scoped>
@mixin pad {
  @media (min-width:1024px) {
    @content
  }
}
.BannerContainer{
  position: relative;
  height: 100%;
  .modelTitle{
    height: 60px;
    border: solid 2px #000;
  }
}
</style>
