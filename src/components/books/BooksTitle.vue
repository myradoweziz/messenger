<script setup>
  import { defineProps } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  const props = defineProps({
    label: {
      type: String,
      default: () => 'Релизы'
    },
    isRotate: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<template>
  <div class="music-title">
    <p>{{ label }}</p>
    <div :class="{ 'music-icon': isRotate }">
      <icon name="arrowRight" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .music-title {
    display: flex;
    gap: 10px;
    padding: 20px 0;
    color: var(--white);
    font-family: Roboto Flex;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    cursor: pointer;
  }
  .music-icon {
    transition: 0.4s all ease;
    transform: rotate(90deg);
  }
</style>
