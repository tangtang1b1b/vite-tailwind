<script setup>
import { ref } from 'vue'

const productImages = ref([
  { image: 'images/05.jpg', name: '699-05', date: '2023.09' },
  { image: 'images/06.jpg', name: '778C-DGF', date: '2023.05' },
  { image: 'images/07.jpg', name: '944C-BUV', date: '2023.02' },
  { image: 'images/08.jpg', name: '3613-04RD', date: '2022.11' },
  { image: 'images/09.jpg', name: '5489N-24', date: '2022.06' },
  { image: 'images/10.jpg', name: '200306ET', date: '2022.05' },
  { image: 'images/11.jpg', name: 'E777-30CM', date: '2022.02' },
  { image: 'images/12.jpg', name: 'E894-15', date: '2022.01' },
  { image: 'images/13.jpg', name: 'E895-15', date: '2021.08' },
  { image: 'images/14.jpg', name: 'E439WH-4', date: '2021.05' },
  { image: 'images/15.jpg', name: 'E617CO-07', date: '2021.02' },
  { image: 'images/16.jpg', name: 'E776-04', date: '2021.01' },
]);

</script>

<template>
  <div class="productContainer w-full">
    <ul class="productWrap w-full lg:flex flex-wrap">
      <li class="productList relative w-full lg:w-1/2 xl:w-1/3 hover:cursor-pointer" v-for="productImage in productImages" :key="productImage">
        <div class="name absolute top-0 right-0 text-base px-4 py-2">{{ productImage.name }}</div>
        <img class="list w-full p-14" :src="productImage.image" alt="model">
        <div class="date absolute bottom-0 left-0 text-base px-4 py-2">{{ productImage.date }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalnia&display=swap');

@mixin pad {
  @media (min-width:1024px) {
    @content
  }
}

@mixin web {
  @media (min-width:1280px) {
    @content
  }
}

.productContainer {
  font-family: 'Kalnia';

  .productWrap {
    padding-bottom: 60px;
    .productList {
      border: solid 2px #000;
      border-top: none;
      overflow: hidden;
      &:hover .list{
        transform: scale(1.05);
      }
      .list{
        transition: 0.5s;
      }
      .name {
        border-bottom: solid 2px #000;
        border-left: solid 2px #000;

        @include pad {
          font-size: 1.5vw;
        }
      }

      .date {
        border-top: solid 2px #000;
        border-right: solid 2px #000;

        @include pad {
          font-size: 1.5vw;
        }
      }
    }

    .productList:last-child {
      border-bottom: none;
    }

    .productList:nth-last-child(2) {
      @include pad {
        border-bottom: none;
      }
    }
    .productList:nth-last-child(3) {
      @include web {
        border-bottom: none;
      }
    }

    .productList:nth-child(2n) {
      @include pad {
        border-left: none;
      }
    }
    .productList:nth-child(n) {
      @include web {
        border-left: none;
      }
    }
    .productList:nth-child(3n+1) {
      @include web {
        border-left: solid 2px #000;
      }
    }
  }
}</style>