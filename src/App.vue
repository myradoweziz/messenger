<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import Default from '@/layouts/Default.vue'
  import Empty from '@/layouts/Empty.vue'

  const route = useRoute()

  const layout = computed(() => (route.meta?.layout == 'empty' ? Empty : Default))
</script>
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Roboto+Flex:regular);
  @import url(https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
  @import './assets/scss/style.scss';
</style>
