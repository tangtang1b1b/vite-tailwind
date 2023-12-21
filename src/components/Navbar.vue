<script setup>
import { ref } from 'vue'

const hamberButton = ref(null);
const hamberClick = () => {
  hamberButton.value.classList.toggle('isClick');
}
</script>

<template>
  <header class="sticky top-0 bg-white z-10">
    <nav class="navBar relative w-full h-full flex justify-between items-center">
      <div class="hamberger h-full flex justify-center items-center border border-2 border-black" @click="hamberClick">
        <div ref="hamberButton" class="hamberButton bg-black w-1/2 h-1/2"></div>
      </div>
      <div class="themeName absolute h-full flex justify-center items-center left-1/2 -translate-x-1/2 text-2xl border-y-black border-y-2">VIRTUALMODEL</div>
      <div class="funcContainer h-full flex items-center justify-center border border-2 border-black">
        <span class="material-symbols-outlined">person</span>
        <!-- <span class="material-symbols-outlined">logout</span> -->
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Triangles&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

.navBar {
  height: 60px;
  .hamberger {
    width: 60px;

    .hamberButton {
      clip-path: polygon(0 0, 0% 20%, 0 49%, 0% 80%, 0 100%, 49% 100%, 100% 100%, 100% 80%, 100% 52%, 100% 20%, 100% 0, 50% 0);
      transition: 0.3s;

    }
    .hamberButton.isClick {
      clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
      transition: 0.3s;
    }
  }
  .themeName{
    width: calc(100% - 120px);
    font-family: 'Rubik Doodle Triangles';
  }
  .funcContainer{
    width: 60px;
    span{
      font-size: 30px;
    }
  }
}
</style>