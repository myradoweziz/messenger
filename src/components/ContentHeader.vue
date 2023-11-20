<script setup>
  import { defineProps } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  defineProps({
    isBlack: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div :class="['content__header', { black: isBlack }]">
    <div class="content__user">
      <div class="content__user-title">
        <div class="content__user-icon">
          <img src="../assets/img/avatar.png" alt="" />
        </div>
        <p>meret_didarow <p v-if="isBlack">13:10 | 13.09.2023</p></p>
      </div>
      <div class="content__dots">
        <icon name="threeDots" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    // .content__header
    &__header {
      padding: 8px 10px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--white);
      &.black {
        background-color: var(--black);
        border: none;
      }
    }
    // .content__user
    &__user {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .content__user-title
    &__user-title {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-top: 10px;
      cursor: pointer;
      p {
        color: var(--white);
        font-family: Roboto Flex;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
				p{
					padding-top: 5px;
				}
      }
    }
    // .content__user-icon
    &__user-icon {
    }
    // .content__dots
    &__dots {
      cursor: pointer;
      padding-top: 5px;
      &:hover {
        opacity: 0.6;
      }
    }
  }
</style>
