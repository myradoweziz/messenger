<script setup>
  import { menus } from '@/helpers/constants'
</script>

<template>
  <div class="header__menu menu">
    <nav class="menu">
      <ul class="menu__list">
        <li v-for="(menu, index) in menus" :key="index" class="menu__item">
          <router-link :to="menu.path" class="menu__link">{{ menu.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    // .header__menu
    &__menu {
    }
  }
  .menu {
    // .menu__list
    &__list {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .menu__item
    &__item {
    }
    // .menu__link
    &__link {
      color: var(--gray);
      font-size: 14px;
      font-weight: 300;
      line-height: normal;
      &:hover {
        color: var(--white);
      }
    }
  }
  .router-link-active {
    color: var(--white);
  }
</style>
