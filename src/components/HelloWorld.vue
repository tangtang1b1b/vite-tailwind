<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const imageOnes = ref(['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg']);
const imageTwos = ref(['images/03.jpg', 'images/04.jpg', 'images/01.jpg', 'images/02.jpg']);

</script>

<template>
  <div class="wrap w-full mx-auto">
    <div class="wrapCarousel h-1/2 bg-white">
      <carousel class="myCarouselOne h-full" :transition="700" :autoplay="3000" :wrap-around="true">
        <slide class="myCarouselList" v-for="image in imageOnes" :key="image">
          <img class="h-full" :src="image" alt="model">
        </slide>
      </carousel>
    </div>
    <div class="wrapCarousel h-1/2 bg-white">
      <carousel class="myCarouselTwo h-full" :transition="700" :autoplay="3000" :wrap-around="true">
        <slide class="myCarouselList" v-for="image in imageTwos" :key="image">
          <img class="h-full" :src="image" alt="model">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin pad {
  @media (min-width:1024px) {
    @content
  }
}

.wrap {
  height: calc(100vh - 120px);
  margin-top: 60px;
  .wrapCarousel {
    border: solid 2px #000;
    border-top: none;
  }

  .wrapCarousel:nth-child(2) {
    border-bottom: none;
  }
}
</style>
