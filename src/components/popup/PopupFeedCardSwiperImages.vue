<script setup>
  import { onMounted, ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  const videoTag = ref(null)
  const isActive = ref(false)

  const pauseOrPlay = () => {
    isActive.value = !isActive.value
    isActive.value ? videoTag.value.play() : videoTag.value.pause()
  }

  const prevSlide = () => {
    const slide = document.getElementById('slide')
    slide.classList.remove('transX-300')
  }

  const nextSlide = () => {
    console.log(videoTag.value.src)
  }
</script>
<template>
  <div class="images">
    <div v-if="false" @click="prevSlide" class="popup-feed__swiper-prev">
      <icon name="arrowLeft" />
    </div>
    <div @click="pauseOrPlay" v-if="!isActive" class="popup-feed__swiper-play">
      <icon name="play" />
    </div>
    <div class="popup-feed__swiper-videos">
      <div @click="pauseOrPlay" class="popup-feed__swiper-video" id="slide">
        <video ref="videoTag" loop src="../../assets/video/d.mp4"></video>
      </div>
    </div>
    <div @click="nextSlide" class="popup-feed__swiper-next">
      <icon name="arrowRight" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .popup-feed {
    // .popup-feed__swiper-prev
    &__swiper-prev {
      position: absolute;
      top: 46%;
      left: 2%;
      z-index: 5;
      cursor: pointer;
      border-radius: 50%;
      background: var(--white);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      :deep(svg) {
        width: 24px;
        height: 24px;
      }
    }
    // .popup-feed__swiper-play
    &__swiper-play {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      z-index: 3;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    // .popup-feed__swiper-videos
    &__swiper-videos {
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      gap: 10px;
    }
    // .popup-feed__swiper-video
    &__swiper-video {
      width: 100%;
    }
    // .popup-feed__swiper-next
    &__swiper-next {
      position: absolute;
      top: 46%;
      right: 2%;
      z-index: 3;
      cursor: pointer;
      border-radius: 50%;
      background: var(--white);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      :deep(svg) {
        width: 24px;
        height: 24px;
      }
    }
  }
  .images {
    position: relative;
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .transX-300 {
    transform: translateX(-500px);
    opacity: 0;
  }
</style>
