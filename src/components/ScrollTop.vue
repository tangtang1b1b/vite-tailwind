<script setup>
import { ref, onMounted, computed } from 'vue'

const scrollValue = ref(0);
const isScroll = ref(false);

onMounted(() => {
  window.addEventListener('scroll', function () {
    scrollValue.value = window.scrollY;
    isScroll.value = scrollValue.value > 0;
  });
});

</script>

<template>
  <div
    class="scrollTopButton fixed bottom-0 bg-white w-full flex justify-center items-center z-10 hover:cursor-pointer"
    :class="{ isScroll: isScroll }">
    <div class="topIcon w-8 h-8 bg-black"></div>
  </div>
</template>

<style lang="scss" scoped>
@mixin pad {
  @media (min-width:1024px) {
    @content
  }
}

.scrollTopButton {
  height: 60px;
  border: solid 2px #000;
  .topIcon {
    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  }

  &.isScroll {
    border-top: solid 2px #000;
  }
}
</style>

