<script setup>
import Navbar from './components/Navbar.vue'
import ScrollTop from './components/ScrollTop.vue'
import HelloWorld from './components/HelloWorld.vue'
import NewModel from './components/NewModel.vue'
</script>

<template>
  <div class="BannerContainer">
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
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  .modelTitle{
    border: solid 2px #000;
  }
}
</style>
