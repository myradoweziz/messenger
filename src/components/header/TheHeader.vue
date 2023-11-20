<script setup>
  import { ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'
  import HeaderMenu from '@/components/header/HeaderMenu.vue'

  const icons = ref(['heart', 'search'])
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__row">
        <div class="header__logo-menu">
          <div class="header__logo">
            <icon name="messengerLogo" />
          </div>
          <header-menu />
        </div>
        <div class="header__icons-upload">
          <div class="header__icons">
            <div v-for="(item, index) in icons" :key="index" class="header__icon">
              <icon :name="item" />
            </div>
          </div>
          <div class="header__upload-user">
            <div class="header__upload-btn">
              <button>
                <icon name="plusCircle" />
                Upload
              </button>
            </div>
            <div class="header__user">
              <div class="header__user-image">
                <img src="../../assets/img/user.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    z-index: 99;
    background-color: var(--black);
    // .header__container
    &__container {
      max-width: 1340px;
      margin: 0 auto;
      padding: 20px 10px;
    }
    // .header__row
    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .header__logo-menu
    &__logo-menu {
      display: flex;
      align-items: center;
      gap: 30px;
    }
    // .header__logo
    &__logo {
    }
    // .header__icons-upload
    &__icons-upload {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .header__icons
    &__icons {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .header__icon
    &__icon {
      cursor: pointer;
      color: var(--white);
    }
    // .header__upload-user
    &__upload-user {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .header__upload-btn
    &__upload-btn {
      button {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 5px;
        background: #0f75ea;
        padding: 10px;
        color: var(--White, #fff);
        font-family: Roboto Flex;
        font-size: 12px;
        font-weight: 300;
        line-height: normal;
      }
    }
    // .header__user
    &__user {
    }
    // .header__user-image
    &__user-image {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
