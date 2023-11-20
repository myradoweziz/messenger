<script setup>
  import { defineProps, ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'
  import MusicTitle from '@/components/music/MusicTitle.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  const props = defineProps({
    label: { type: String, default: () => 'Релизы' }
  })

  const swiperReleases = ref(null)

  const prevSlide = () => {
    swiperReleases.value.$el.swiper.slidePrev()
  }

  const nextSlide = () => {
    swiperReleases.value.$el.swiper.slideNext()
  }

  const checked = ref(false)
  const isRotate = ref(false)
</script>

<template>
  <section class="releases">
    <div class="releases__row">
      <div @click="prevSlide" class="releases__swiper-prev">
        <icon name="arrowLeft" />
      </div>
      <music-title @click="isRotate = !isRotate" :label="label" :is-rotate="isRotate" />
      <div class="releases__swiper">
        <swiper
          ref="swiperReleases"
          :slides-per-view="8"
          :space-between="20"
          :class="['releases__musics', { hidden: isRotate }]"
        >
          <swiper-slide v-for="i in 15" @click="checked = !checked" class="releases__music-card">
            <div class="releases__music-image">
              <img src="@/assets/img/performer.png" alt="" />
              <div class="releases__music-play">
                <icon :name="checked ? 'musicPause' : 'musicPlay'" />
              </div>
            </div>
            <div class="releases__music-title">Танцпоп</div>
          </swiper-slide>
        </swiper>
      </div>
      <div @click="nextSlide" class="releases__swiper-next">
        <icon name="arrowRight" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .releases {
    // .releases__row
    &__row {
      position: relative;
      &:hover {
        .releases__swiper-next,
        .releases__swiper-prev {
          opacity: 1;
        }
      }
    }

    // .releases__swiper
    &__swiper {
    }
    // .releases__swiper-prev
    &__swiper-prev {
      opacity: 0;
      transition: 0.5s all ease-in;
      position: absolute;
      top: 35%;
      left: -60px;
      color: var(--gray);
      cursor: pointer;
      :deep(svg) {
        width: 52px;
        height: 52px;
        &:hover {
          color: var(--white);
        }
      }
    }
    // .releases__swiper-next
    &__swiper-next {
      opacity: 0;
      transition: 0.5s all ease-in;
      position: absolute;
      top: 35%;
      right: -55px;
      color: var(--gray);
      cursor: pointer;
      :deep(svg) {
        width: 52px;
        height: 52px;
        &:hover {
          color: var(--white);
        }
      }
    }
    // .releases__musics
    &__musics {
      padding-bottom: 13px;
      transition: 0.4s all ease;
    }
    // .releases__music-card
    &__music-card {
      cursor: pointer;
      &:hover {
        .releases__music-play {
          opacity: 1;
        }
      }
    }
    // .releases__music-image
    &__music-image {
      border-radius: 50%;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
      }
    }
    // .releases__music-play
    &__music-play {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: 0.5s all ease;
    }
    // .releases__music-title
    &__music-title {
      color: var(--music-title);
      font-family: Roboto Flex;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 15px; /* 93.75% */
      padding-top: 10px;
      text-align: center;
    }
  }

  .hidden {
    transition: 0.4s all ease;
    padding: 0;
    height: 0;
  }
  .swiper-slide,
  .swiper {
    transition: 0.4s all ease;
  }
</style>
