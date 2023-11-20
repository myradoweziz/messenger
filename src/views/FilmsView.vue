<script setup>
  import Icon from '@/components/base/Icon.vue'
  import FilmsCategories from '@/components/FilmsCategories.vue'
</script>

<template>
  <section class="films">
    <div class="films__row">
      <div class="films__banner">
        <div class="films__image">
          <img src="../assets/img/f.jpg" alt="" />
        </div>
        <div class="films__content">
          <div class="films__film-name">JOCKER VS BATMEN</div>
          <div class="films__film-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat. Autem deleniti, sed modi nostrum
            veritatis placeat optio illo reiciendis voluptatem, numquam ratione dignissimos a molestiae quam vel
            consequuntur dolores.
          </div>
          <div class="films__btn-icons">
            <div class="films__btn">
              <button>
                <icon name="filmPlay" />
                Смотреть
              </button>
            </div>
            <div class="films__icons">
              <div class="films__icon">
                <icon name="bookmark" />
              </div>
              <div class="films__icon">
                <icon name="download" />
              </div>
              <div class="films__icon">
                <p>16+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="films__categories">
        <films-categories label="Films" />
        <films-categories label="Turkmen films" />
        <films-categories label="Popular" />
        <films-categories label="Serial" />
        <films-categories label="Cartoon films" />
        <films-categories label="Dokumental films" />
        <films-categories label="Historical films" />
        <films-categories label="Watan habarlary" />
        <films-categories label="Turkish films" />
        <films-categories label="Indian films" is-border-none />
      </div>
    </div>
  </section>
  <div class="films__footer">Copyright 2023 Salam. All rights reserved.</div>
</template>

<style lang="scss" scoped>
  .films {
    padding-top: 100px;
    padding-bottom: 50px;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #272727;

    // .films__row
    &__row {
    }
    // .films__footer
    &__footer {
      background-color: #000;
      text-align: center;
      color: var(--cal-2, #868686);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      padding: 10px;
    }
    // .films__banner
    &__banner {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    // .films__image
    &__image {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      height: 100vh;
      img {
        width: 100%;
        height: 100%;
        object-position: center;
      }
    }
    // .films__content
    &__content {
      position: relative;
      z-index: 2;
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: flex-end;
      padding-bottom: 350px;
    }
    // .films__film-name
    &__film-name {
      color: var(--white);
      font-family: Work Sans;
      font-size: 40px;
      font-weight: 800;
      line-height: 120%; /* 48px */
      letter-spacing: -0.3px;
      text-transform: uppercase;
    }
    // .films__film-desc
    &__film-desc {
      color: var(--White, #fff);
      font-family: Roboto;
      font-weight: 400;
      line-height: 150%; /* 24px */
      max-width: 500px;
      padding-bottom: 5px;
    }
    // .films__btn-icons
    &__btn-icons {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    // .films__btn
    &__btn {
      button {
        border-radius: 4px;
        background: var(--White, #fff);
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
        padding: 18px 26px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 500;
        line-height: 120%; /* 18px */
      }
    }
    // .films__icons
    &__icons {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    // .films__icon
    &__icon {
      cursor: pointer;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      color: var(--white);
      font-family: Roboto;
      font-size: 20px;
      font-weight: 500;
      line-height: 120%; /* 24px */
      padding: 5px;
      min-height: 56px;
      min-width: 56px;
      position: relative;
      :deep(svg),
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
