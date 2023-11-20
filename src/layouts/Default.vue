<script setup>
  import TheHeader from '@/components/header/TheHeader.vue'
</script>

<template>
  <main class="main-page">
    <the-header />
    <div class="main-page__bottom">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main-page {
    // .main-page__bottom
    &__bottom {
    }
  }
</style>
