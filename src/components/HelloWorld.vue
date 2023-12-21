<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const imageOnes = ref(['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg']);
const imageTwos = ref(['images/03.jpg', 'images/04.jpg', 'images/01.jpg', 'images/02.jpg']);

</script>

<template>
  <div class="wrap w-full mx-auto">
    <div class="wrapCarousel h-1/2 bg-white border border-2 border-b-black">
      <carousel class="myCarouselOne h-full" :pauseAutoplayOnHover="true" :transition="700" :autoplay="3000" :wrap-around="true">
        <slide class="myCarouselList" v-for="image in imageOnes" :key="image">
          <img class="h-full" :src="image" alt="model">
        </slide>
      </carousel>
    </div>
    <div class="wrapCarousel h-1/2 bg-white border border-2 border-b-black">
      <carousel class="myCarouselTwo h-full" :pauseAutoplayOnHover="true" :transition="700" :autoplay="3000" :wrap-around="true">
        <slide class="myCarouselList" v-for="image in imageTwos" :key="image">
          <img class="h-full" :src="image" alt="model">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 120px);
}
</style>
