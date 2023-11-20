<script setup>
  import { defineProps } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  defineProps({
    video: { type: Boolean, default: false },
    image: { type: Boolean, default: false }
  })
</script>

<template>
  <div class="feed__card">
    <div v-if="image && !video" class="feed__card-icon">
      <icon name="shape" />
    </div>
    <div v-else-if="video && !image" class="feed__card-icon">
      <icon name="clapperBoard" />
    </div>
    <div v-if="image && !video" class="feed__card-image">
      <img src="../assets/img/Rectangle 12.png" alt="" />
    </div>
    <div v-else-if="video && !image" class="feed__card-video">
      <video src="../assets/video/s.mp4"></video>
    </div>
    <div class="feed__views-counts">
      <p>
        <icon name="heartAlt" />
        757
      </p>
      <p><icon name="comment" /> 123</p>
    </div>
    <div class="feed__gray"></div>
  </div>
</template>

<style lang="scss" scoped>
  .feed {
    // .feed__card
    &__card {
      min-height: 347px;
      min-width: 346px;
      position: relative;
      cursor: pointer;
      &:hover {
        .feed__gray {
          display: block;
        }
        .feed__views-counts {
          display: flex;
        }
      }
    }
    // .feed__card-icon
    &__card-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      z-index: 4;
    }
    // .feed__card-image
    &__card-image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .feed__card-video
    &__card-video {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
      video {
        width: 100%;
        height: 100%;
      }
    }
    // .feed__gray
    &__gray {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--black);
      opacity: 0.2;
      z-index: 2;
    }
    // .feed__views-counts
    &__views-counts {
      display: none;
      align-items: center;
      gap: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      p {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--White, #fff);
        font-family: Roboto Flex;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
</style>
