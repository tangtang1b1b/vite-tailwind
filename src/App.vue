<script setup>
import Navbar from './components/Navbar.vue'
import ScrollTop from './components/ScrollTop.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="BannerContainer">
    <Navbar />
    <HelloWorld />
    <ScrollTop />
  </div>
  <HelloWorld />
</template>

<style lang="scss" scoped>
.BannerContainer{
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
}
</style>
