<script setup>
  import { defineProps, defineEmits } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  const emit = defineEmits(['clickedHeartIcon', 'clickedShare', 'clickedWhiteIcon'])

  defineProps({
    isRedHeart: { type: Boolean, default: false },
    isShare: { type: Boolean, default: false },
    isWhite: { type: Boolean, default: false },
    isPublication: { type: Boolean, default: false }
  })

  const clickedHeartIcon = () => {
    emit('clickedHeartIcon')
  }
  const clickedShare = () => {
    emit('clickedShare')
  }
  const clickedWhiteIcon = () => {
    emit('clickedWhiteIcon')
  }
</script>

<template>
  <div :class="['content__created-icons-bookmark', { active: isPublication }]">
    <div class="content__created-icons">
      <div @click="clickedHeartIcon" class="content__created-icon">
        <icon :name="isRedHeart ? 'heartRed' : 'heart'" />
      </div>
      <div class="content__created-icon">
        <icon name="commentOutlined" />
      </div>
      <div @click="clickedShare" class="content__created-icon">
        <icon name="send" />
      </div>
    </div>
    <div @click="clickedWhiteIcon" class="content__created-bookmark">
      <icon :name="isWhite ? 'bookmarkWhite' : 'bookmark'" />
    </div>
  </div>
  <div class="content__created-like">
    <span>447 liked </span>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    // .content__created-like
    &__created-like {
      padding-top: 7px;
      padding-left: 0px;
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
    }
    // .content__created-icons-bookmark
    &__created-icons-bookmark {
      border-top: 1px solid var(--white);
      padding-bottom: 7px;
      padding-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active {
        border: none;
      }
    }
    // .content__created-icons
    &__created-icons {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .content__created-icon
    &__created-icon {
      color: var(--white);
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
      &:first-child {
        :deep(svg) {
          width: 26px;
          height: 26px;
        }
      }
    }
    // .content__created-bookmark
    &__created-bookmark {
      color: var(--white);
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
</style>
