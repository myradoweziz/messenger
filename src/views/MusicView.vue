<script setup>
  import { ref } from 'vue'

  import MusicCard from '@/components/music/MusicCard.vue'
  import MusicReleases from '@/components/music/MusicReleases.vue'
  import MusicPerformers from '@/components/music/MusicPerformers.vue'
  import MusicTenTop from '@/components/music/MusicTenTop.vue'
  import AudioPlayer from '@/components/base/AudioPlayer.vue'

  const isLoadedAudio = ref(false)
</script>

<template>
  <main :class="['music', { 'pb-60': isLoadedAudio }]">
    <div class="music__container">
      <div class="music__row">
        <div class="music__title">Образ</div>
        <div class="music__cards">
          <music-card />
        </div>
        <div class="music__releases">
          <music-releases />
          <music-releases label="Туркменские новинки" />
          <music-releases label="Популярные" />
          <music-releases label="Плейлисты" />
          <music-performers label="Исполнители" />
          <music-ten-top />
        </div>
      </div>
    </div>
  </main>
  <audio-player v-if="isLoadedAudio" />
</template>

<style lang="scss" scoped>
  .music {
    padding-top: 100px;
    background-color: var(--background);
    height: 100%;
    min-height: 100vh;
    padding-bottom: 20px;
    // .music__container
    &__container {
      max-width: 1330px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .music__row
    &__row {
    }
    // .music__title
    &__title {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 36px;
      font-weight: 700;
      line-height: normal;
      padding-bottom: 10px;
    }
    // .music__cards
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    // .music__releases
    &__releases {
    }
  }
  .primary {
    opacity: 0.7;
    background: linear-gradient(71deg, #000428 0%, #004e92 100%);
  }
  .pb-60 {
    padding-bottom: 60px;
  }
</style>
