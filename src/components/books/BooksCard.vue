<script setup>
  import Icon from '@/components/base/Icon.vue'
</script>

<template>
  <div class="books__card">
    <div class="books__logo">
      <icon name="musicLogo" />
    </div>
    <div class="books__front"></div>
    <div class="books__image">
      <img src="@/assets/img/music.png" alt="" />
    </div>
    <div class="books__image-title">HIT <br />books</div>
  </div>
  <div class="books__card">
    <div class="books__logo">
      <icon name="musicLogo" />
    </div>
    <div class="books__front"></div>
    <div class="books__image">
      <img src="@/assets/img/second_music.png" alt="" />
    </div>
    <div class="books__image-title">downloads</div>
  </div>
  <div class="books__card">
    <div class="books__logo">
      <icon name="musicLogo" />
    </div>
    <div class="books__front primary"></div>
    <div class="books__image">
      <img src="@/assets/img/third_music.png" alt="" />
    </div>
    <div class="books__image-title">
      last<br />
      listened
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .books {
    // .books__card
    &__card {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
    }
    // .books__logo
    &__logo {
      position: absolute;
      top: 10px;
      right: 30px;
      display: flex;
      z-index: 2;
      justify-content: flex-end;
      width: 100%;
    }
    // .books__front
    &__front {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background: var(--simple-202, linear-gradient(143deg, #8338e3 -22.92%, #e0a9bb 122.49%));
    }
    // .books__image
    &__image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .books__image-title
    &__image-title {
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 5;
      font-size: 60px;
      font-weight: 700;
      line-height: 60px; /* 100% */
      background: linear-gradient(89deg, rgba(255, 255, 255, 0.79) -9.94%, rgba(255, 255, 255, 0) 121.49%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
