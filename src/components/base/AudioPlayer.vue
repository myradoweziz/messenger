<script setup>
  import { onMounted, ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  onMounted(() => {
    const audio = document.querySelector('audio')
    const player = document.querySelector('.audio-player')
    const title = document.querySelector('p')
    const progressContainer = document.querySelector('.audio-player__range')
    const progress = document.querySelector('.progress')

    const songs = ['a', 'g', 'l']
    const songIndex = ref(0)

    const loadSong = (song) => {
      title.innerHTML = song
      audio.src = `../../assets/audio/${song}.mp3`
    }
    loadSong(songs[songIndex.value])
  })
</script>

<template>
  <section class="audio-player">
    <div class="audio-player__row">
      <div class="audio-player__range">
        <div class="progress"></div>
      </div>
      <audio class="ses" src="../../assets/audio/g.mp3"></audio>
      <div class="audio-player__controllers">
        <div class="audio-player__content">
          <div class="audio-player__image">
            <img src="@/assets/img/1.png" alt="" />
          </div>
          <div class="audio-player__title">
            <p class="p">Красная дорожка</p>
            <span>Apple Music Поп на русском</span>
          </div>
        </div>
        <div class="audio-player__played">
          <div class="audio-player__played-random">
            <icon name="randomMusic" />
          </div>
          <div class="audio-player__played-pause">
            <div class="audio-player__played-prev">
              <icon name="prevMusic" />
            </div>
            <div class="audio-player__played-play">
              <icon name="pause" />
            </div>
            <div class="audio-player__played-next">
              <icon name="nextMusic" />
            </div>
          </div>
          <div class="audio-player__played-repeat">
            <icon name="repeat" />
          </div>
        </div>
        <div class="audio-player__volume">
          <div class="audio-player__volume-range">
            <div class="audio-player__volume-icon">
              <icon name="volumeMute" />
            </div>
            <input type="range" max="100" min="0" />
          </div>
          <div class="audio-player__volume-zoom">
            <icon name="zoom" />
          </div>
          <div class="audio-player__volume-close">
            <icon name="close" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .audio-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background-color: #000;
    // .audio-player__row
    &__row {
    }
    // .audio-player__range
    &__range {
      height: 5px;
      background: var(--cal-2, #868686);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      .progress {
        position: absolute;
        top: -3px;
        left: 0px;
        width: 12px;
        height: 12px;
        background-color: var(--white);
        box-shadow: -410px 0 0 400px #fff;
      }
    }
    // .audio-player__controllers
    &__controllers {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px;
    }
    // .audio-player__content
    &__content {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    // .audio-player__image
    &__image {
      width: 42px;
      height: 42px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .audio-player__title
    &__title {
      color: rgba(255, 255, 255, 0.88);
      font-size: 12px;
      font-weight: 700;
      line-height: 15px; /* 125% */
      span {
        color: rgba(255, 255, 255, 0.56);
        font-size: 12px;
        font-weight: 400;
      }
    }
    // .audio-player__played
    &__played {
      display: flex;
      align-items: center;
      gap: 26px;
    }
    // .audio-player__played-random
    &__played-random {
      cursor: pointer;
    }
    // .audio-player__played-pause
    &__played-pause {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .audio-player__played-prev
    &__played-prev {
      @extend .audio-player__played-random;
    }
    // .audio-player__played-play
    &__played-play {
      @extend .audio-player__played-random;
    }
    // .audio-player__played-next
    &__played-next {
      @extend .audio-player__played-random;
    }
    // .audio-player__played-repeat
    &__played-repeat {
      @extend .audio-player__played-random;
    }
    // .audio-player__volume
    &__volume {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    // .audio-player__volume-range
    &__volume-range {
      display: flex;
      gap: 6px;
      align-items: center;
      // overflow: hidden;
      input {
        -webkit-appearance: none;
        background-color: #868686;
        border-radius: 12px;
        height: 10px;
        overflow: hidden;
        cursor: pointer;
        &::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: -410px 0 0 400px #fff;
          -webkit-appearance: none;
          pointer-events: auto;
          cursor: pointer;
        }
      }
    }
    // .audio-player__volume-icon
    &__volume-icon {
      @extend .audio-player__played-random;
      color: var(--white);
    }
    // .audio-player__volume-zoom
    &__volume-zoom {
      @extend .audio-player__played-random;
    }
    // .audio-player__volume-close
    &__volume-close {
      padding-right: 40px;
      @extend .audio-player__played-random;
    }
  }
</style>
