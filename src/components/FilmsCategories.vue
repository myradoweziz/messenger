<script setup>
  import { defineProps } from 'vue'

  import MusicTitle from '@/components/music/MusicTitle.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  defineProps({
    label: {
      type: String
    },
    isBorderNone: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<template>
  <section class="categories">
    <div class="categories__row">
      <div class="categories__title">
        <music-title :label="label" />
      </div>
    </div>
    <swiper :slides-per-view="5.5" :space-between="20" :class="['categories__cards', { 'border-none': isBorderNone }]">
      <swiper-slide v-for="i in 6" :key="i">
        <div class="categories__image">
          <img src="../assets/img/jocker.png" alt="" />
        </div>
        <div class="categories__title">Красная дорожка</div>
        <div class="categories__desc">Lorem ipsum dolor sit amet</div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
  .categories {
    &:first-child {
      margin-top: -200px;
    }

    padding-left: 80px;
    position: relative;
    z-index: 2;
    // .categories__row
    &__row {
    }
    // .categories__title
    &__title {
    }
    // .categories__cards
    &__cards {
      // padding-left: 8px;
    }
    // .categories__image
    &__image {
      margin-left: -10px;
      width: 100%;
      min-width: 250px;
      img {
        width: 100%;
      }
    }
    // .categories__title
    &__title {
      color: rgba(255, 255, 255, 0.88);
      font-family: Roboto Flex;
      font-size: 18px;
      font-weight: 500;
      line-height: 15px; /* 83.333% */
      padding-bottom: 5px;
    }
    // .categories__desc
    &__desc {
      color: rgba(255, 255, 255, 0.56);
      font-family: Roboto Flex;
      font-size: 18px;
      font-weight: 400;
      line-height: 15px; /* 83.333% */
    }
  }
  .swiper {
    border-bottom: 1px solid rgba(134, 134, 134, 0.15);
    padding-bottom: 20px;
  }
  .border-none {
    border-bottom: none;
  }
</style>
