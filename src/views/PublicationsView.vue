<script setup>
  import ContentHeader from '@/components/ContentHeader.vue'
  import ContentLikes from '@/components/ContentLikes.vue'
  import Icon from '@/components/base/Icon.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'

  import 'swiper/css'
  import 'swiper/css/pagination'

  // document.body.classList.add('_lock')
</script>

<template>
  <main class="publications">
    <div class="publications__container">
      <div class="publications__row">
        <swiper :direction="'vertical'" class="mySwiper">
          <swiper-slide>
            <div class="publications__header">
              <content-header is-black />
            </div>
            <div class="publications__video">
              <video controls autoplay loop src="../assets/video/s.mp4"></video>
              <div class="publications__volume">
                <icon name="volumeMute" />
              </div>
            </div>
            <div class="publications__likes">
              <content-likes is-publication />
            </div>
            <div class="publications__video-name">
              <p>meret_didarow</p>
              <span>Best practices for using images in UI design...</span>
            </div>
            <div class="publications__comments">
              <div class="publications__message">devami</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .publications {
    padding-top: 100px;
    background-color: var(--background);
    height: 100%;
    min-height: 100vh;
    padding-bottom: 20px;
    // .publications__container
    &__container {
      max-width: 500px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .publications__row
    &__row {
    }
    // .publications__header
    &__header {
    }
    // .publications__video
    &__video {
      width: 100%;
      position: relative;
      padding-top: 89%;
      video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
    // .publications__volume
    &__volume {
      position: absolute;
      bottom: 20px;
      right: 20px;
      color: var(--white);
      border-radius: 50px;
      background: rgba(0, 0, 0, 0.6);
      padding: 8px;
      cursor: pointer;
    }
    // .publications__likes
    &__likes {
    }
    // .publications__video-name
    &__video-name {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 13px;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 0;
    }
    // .publications__comments
    &__comments {
    }
    // .publications__message
    &__message {
      color: var(--gray-300);
      font-family: Roboto Flex;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
    }
  }
</style>
