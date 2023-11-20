<script setup>
  import { defineEmits, ref } from 'vue'

  import Icon from '@/components/base/Icon.vue'

  const emit = defineEmits(['close'])

  const close = () => {
    emit('close')
  }

  const checked = ref(false)
</script>

<template>
  <div class="popup">
    <div class="share">
      <div class="share__row">
        <div class="share__header">
          <div class="share__title">Paylaş</div>
          <div @click="close" class="share__close">
            <icon name="multiply" />
          </div>
        </div>
        <div class="share__whom">
          <div class="share__whom-title">Kime:</div>
          <div class="share__whom-search">
            <input type="search" placeholder="Search..." />
          </div>
        </div>
        <div class="share__accounts">
          <div v-for="i in 5" class="share__account">
            <div class="share__account-image-title">
              <div class="share__account-image">
                <img src="../../assets/img/jennet.png" alt="" />
              </div>
              <div class="share__account-title">
                <span>Jennet_Allamyradowna</span>
                <p>Jennet_Allamyradowna</p>
              </div>
            </div>
            <div @click="checked = !checked" class="share__checkbox">
              <icon :name="checked ? 'checked' : 'unChecked'" />
            </div>
          </div>
        </div>
        <div class="share__btn">
          <button>Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
  }
  .share {
    position: absolute;
    top: 13%;
    left: 30%;
    width: 100%;
    max-width: 600px;
    max-height: 630px;
    z-index: 5;
    border-radius: 20px;
    background: var(--popup);
    // .share__row
    &__row {
    }
    // .share__header
    &__header {
      padding: 16px 20px;
      display: flex;
      align-items: center;
    }
    // .share__title
    &__title {
      flex: 1 1 auto;
      text-align: center;
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 18px;
      font-weight: 700;
      line-height: normal;
    }
    // .share__close
    &__close {
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
    }
    // .share__whom
    &__whom {
      padding: 10px 20px;
      border-bottom: 0.5px solid var(--cal-2, #868686);
      border-top: 0.5px solid var(--cal-2, #868686);
    }
    // .share__whom-title
    &__whom-title {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
      padding-bottom: 10px;
    }
    // .share__whom-search
    &__whom-search {
      input {
        color: var(--white);
        padding: 5px;
        width: 100%;
        background-color: transparent;
        font-size: 16px;
        font-family: Roboto Flex;
        font-weight: 600;
        line-height: normal;
      }
    }
    // .share__accounts
    &__accounts {
      padding: 20px;
      overflow-y: auto;
      max-height: 400px;
      border-bottom: 0.5px solid var(--cal-2, #868686);
    }
    // .share__account
    &__account {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
    }
    // .share__account-image-title
    &__account-image-title {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    // .share__account-image
    &__account-image {
    }
    // .share__account-title
    &__account-title {
      span {
        color: var(--white);
        font-family: Roboto Flex;
        font-size: 18px;
        font-weight: 600;
        line-height: normal;
      }
      p {
        padding-top: 3px;
        color: var(--span);
        font-family: Roboto Flex;
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
      }
    }
    // .share__checkbox
    &__checkbox {
      cursor: pointer;
    }
    // .share__btn
    &__btn {
      padding: 16px 20px;
      text-align: center;
      button {
        color: var(--white);
        font-family: Roboto Flex;
        font-size: 18px;
        font-weight: 700;
        line-height: normal;
        padding: 10px;
        border-radius: 10px;
        background: #0f75ea;
        width: 100%;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: var(--gray);
  }

  ::-webkit-scrollbar-track-piece {
    height: 5px;
    border-radius: 20px;
    border: 1px solid var(--gray);
  }

  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 20px;
    opacity: 0;
    background-color: var(--white);
  }
</style>
