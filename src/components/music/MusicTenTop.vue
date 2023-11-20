<script setup>
  import { ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'
  import MusicTitle from '@/components/music/MusicTitle.vue'

  const checked = ref(false)
  const isRotate = ref(false)
</script>

<template>
  <section class="music-ten-top">
    <div class="music-ten-top__row">
      <music-title @click="isRotate = !isRotate" label="Salam Top" :is-rotate="isRotate" />
    </div>
    <div :class="['music-ten-top__musics', { hidden: isRotate }]">
      <div v-for="i in 12" class="music-ten-top__music-card">
        <div class="music-ten-top__music-image-title">
          <div class="music-ten-top__music-image">
            <img src="@/assets/img/performer.png" alt="" />
            <div @click="checked = !checked" class="music-ten-top__music-play">
              <icon :name="checked ? 'musicPause' : 'musicPlay'" />
            </div>
          </div>
          <div class="music-ten-top__title">
            <p>Aşk Sadece</p>
            <span>Berkay Şahin, Elif Nun İçelli</span>
          </div>
        </div>
        <div class="music-ten-top__delay">09:28</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .music-ten-top {
    // .music-ten-top__row
    &__row {
    }
    // .music-ten-top__musics
    &__musics {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
    }
    // .music-ten-top__music-card
    &__music-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 0.5px solid var(--border);
      cursor: pointer;
      &:hover {
        .music-ten-top__music-play {
          opacity: 1;
        }
      }
    }
    // .music-ten-top__music-image-title
    &__music-image-title {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 0;
    }
    // .music-ten-top__music-image
    &__music-image {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      box-shadow: 0px 0px 0px 1px var(--box-shadow) inset;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .music-ten-top__title
    &__title {
      color: var(--music-title);
      font-size: 13px;
      line-height: 138.462%;
      span {
        color: var(--music-desc);
        font-size: 12px;
        line-height: 125%;
      }
    }
    // .music-ten-top__delay
    &__delay {
      color: var(--music-desc);
      font-size: 12px;
      line-height: normal;
    }

    // .music-ten-top__music-play
    &__music-play {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      opacity: 0;
      transition: 0.5s all ease;
      transform: translate(-50%, -50%);
      :deep(svg) {
        width: 20px;
        height: 20px;
      }
    }
  }
  .hidden {
    height: 0;
    padding: 0;
  }
</style>
