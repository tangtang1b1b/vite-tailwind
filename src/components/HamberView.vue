<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from '../store/store';
const store = useStore();

</script>

<template>
  <div class="maskContainer fixed flex flex-col justify-center items-center bg-black z-20 w-full h-full" :class="{ isClick: store.isClick }">
    <p class="text-white w-full text-4xl text-center py-5" :class="{ isClick: store.isClick }">Hi ~ I'm Eric</p>
    <p class="text-white w-screen text-4xl text-center origin-center py-10" :class="{ isClick: store.isClick }">See my <a href="https://github.com/tangtang1b1b" target="_blank" class="text-yellow-300">Github</a> here</p>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalnia&display=swap');
.maskContainer {
  top: 60px;
  clip-path: circle(0);
  transition: 0.7s ease;
  font-family: 'Kalnia';
  p{
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.7s 0.1s;
    &.isClick{
      transform: translateY(0%);
      opacity: 1;
    }
  }
  &.isClick {
    clip-path: circle(100%);
  }
}
</style>

