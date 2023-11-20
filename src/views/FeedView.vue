<script setup>
  import { ref } from 'vue'

  import FeedCard from '@/components/FeedCard.vue'
  import PopupFeedCard from '@/components/popup/PopupFeedCard.vue'

  const image = ref(true)
  const video = ref(false)

  const isOpenCard = ref(false)

  const openCard = () => {
    isOpenCard.value = true

    document.body.classList.add('_lock')
  }
</script>

<template>
  <main class="feed">
    <div class="feed__container">
      <div class="feed__row">
        <div class="feed__cards">
          <feed-card @click="openCard" v-for="i in 10" :image="image" :video="video" id="card" />
        </div>
      </div>
    </div>
    <popup-feed-card v-if="isOpenCard" />
  </main>
</template>

<style lang="scss" scoped>
  .feed {
    padding-top: 100px;
    background-color: var(--background);
    height: 100%;
    min-height: 100vh;
    padding-bottom: 20px;
    // .feed__container
    &__container {
      max-width: 950px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .feed__row
    &__row {
    }
    // .feed__cards
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  }
</style>
