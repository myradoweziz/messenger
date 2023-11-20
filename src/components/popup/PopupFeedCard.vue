<script setup>
  import { ref, watchEffect } from 'vue'

  import { Swiper, SwiperSlide } from 'swiper/vue'

  import Icon from '@/components/base/Icon.vue'
  import PopupFeedCardSwiperImages from '@/components/popup/PopupFeedCardSwiperImages.vue'
  import PopupShare from '@/components/popup/PopupShare.vue'
  import ContentHeader from '@/components/ContentHeader.vue'
  import ContentLikes from '@/components/ContentLikes.vue'

  import 'swiper/css'

  const test = ref('')
  const rows = ref(1)
  const swiperSlides = ref(null)

  watchEffect(() => {
    if (test.value.length > 48) {
      rows.value = 3
    } else {
      rows.value = 1
    }
  })

  const prev = () => {
    swiperSlides.value.$el.swiper.slidePrev()
  }
  const next = () => {
    swiperSlides.value.$el.swiper.slideNext()
  }

  const isWhite = ref(false)
  const isRedHeart = ref(false)

  const isShare = ref(false)
</script>

<template>
  <div class="popup">
    <div class="popup-feed">
      <div class="popup-feed__container">
        <div @click="prev" class="popup-feed__swiper-prev">
          <icon name="arrowLeft" />
        </div>
        <div class="popup-feed__row">
          <swiper ref="swiperSlides" class="mySwiper popup-feed__swiper">
            <swiper-slide v-for="i in 3" :key="i" class="popup-feed__swiper-slide">
              <div class="popup-feed__image">
                <popup-feed-card-swiper-images />
              </div>
              <div class="popup-feed__content content">
                <content-header />
                <div class="content__comment-title">1 Comentary</div>
                <div class="content__comment">
                  <div class="content__comment-avatar">
                    <img src="../../assets/img/maksat.png" alt="" />
                  </div>
                  <div class="content__comments">
                    <div class="content__name-date">
                      <div class="content__name">maksat.myradow</div>
                      <div class="content__date">13:10 | 17.06.2023</div>
                    </div>
                    <div class="content__message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, impedit? Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Ullam iste et incidunt ut accusamus at alias quisquam
                      voluptates a quasi corrupti sit mollitia impedit quos exercitationem, fugiat laboriosam aspernatur
                      amet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores ab
                      temporibus! Obcaecati corrupti quos in animi placeat sequi voluptatibus perferendis optio quidem
                      laudantium explicabo deserunt a nisi deleniti aliquid saepe illo fugiat quae, eveniet ipsa veniam
                      dicta? Vero, quis illo nobis sapiente neque officiis tempora harum! Neque totam laborum velit
                      dolorem, praesentium, nesciunt magnam, excepturi culpa tenetur quidem autem provident accusamus
                      cupiditate voluptates dignissimos rerum dolores id deleniti ipsa ullam! Alias placeat a quos
                      cupiditate voluptates dignissimos rerum dolores id deleniti ipsa ullam! Alias placeat a quos
                      cupiditate voluptates dignissimos rerum dolores id deleniti ipsa ullam! Alias placeat a quos
                      cupiditate voluptates dignissimos rerum dolores id deleniti ipsa ullam! Alias placeat a quos
                      officiis sed omnis eligendi tempora ex! Esse aliquid ut, voluptatem dolores quaerat recusandae sed
                    </div>
                  </div>
                </div>
                <div class="content__created-likes">
                  <content-likes
                    @clicked-heart-icon="isRedHeart = !isRedHeart"
                    @clicked-share="isShare = true"
                    @clicked-white-icon="isWhite = !isWhite"
                    :is-red-heart="isRedHeart"
                    :is-share="isShare"
                    :is-white="isWhite"
                  />
                  <div class="content__created-date">
                    <p>13:10 |</p>
                    <span> 17.06.2023</span>
                  </div>
                  <div class="content__footer">
                    <div class="content__footer-input-icon">
                      <div class="content__footer-icon">
                        <icon name="smile" />
                      </div>
                      <div class="content__footer-input">
                        <textarea v-model="test" :rows="rows" placeholder="Add comment...."></textarea>
                      </div>
                    </div>
                    <div class="content__footer-send">
                      <button>Paylas</button>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div @click="next" class="popup-feed__swiper-next">
          <icon name="arrowRight" />
        </div>
      </div>
    </div>
    <popup-share v-if="isShare" @close="isShare = false" />
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
    overflow: hidden;
  }
  .popup-feed {
    position: absolute;
    top: 5%;
    left: 9%;
    width: 85%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    // .popup-feed__container
    &__container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 10px;
      position: relative;
    }
    // .popup-feed__row
    &__row {
      width: 135%;
    }
    // .popup-feed__swiper-prev
    &__swiper-prev {
      position: absolute;
      top: 45%;
      left: -5%;
      z-index: 3;
      border-radius: 50%;
      background: var(--white);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      :deep(svg) {
        width: 32px;
        height: 32px;
      }
    }
    // .popup-feed__swiper-next
    &__swiper-next {
      position: absolute;
      top: 45%;
      right: -12%;
      z-index: 5;
      border-radius: 50%;
      background: var(--white);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      :deep(svg) {
        width: 32px;
        height: 32px;
      }
    }
    // .popup-feed__swiper
    &__swiper {
      // width: 100%;
    }
    // .popup-feed__swiper-slide
    &__swiper-slide {
      display: flex;
    }
    // .popup-feed__image
    &__image {
      max-width: 700px;
      min-width: 475px;
      max-height: 617px;
      width: 47%;
    }
    // .popup-feed__video
    &__video {
      width: 100%;
    }
    // .popup-feed__content
    &__content {
      background-color: var(--black);
      max-width: 450px;
    }
  }
  .mySwiper {
  }
  .content {
    padding: 7px 14px;
    display: flex;
    flex-direction: column;
    max-height: 617px;

    // .content__comment-title
    &__comment-title {
      padding-top: 14px;
      padding-bottom: 21px;
      text-align: center;
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
    // .content__comment
    &__comment {
      display: flex;
      gap: 15px;
      flex: 1 1 auto;
      overflow-y: auto;
      max-width: 422px;
    }
    // .content__comment-avatar
    &__comment-avatar {
    }
    // .content__comments
    &__comments {
    }
    // .content__name-date
    &__name-date {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .content__name
    &__name {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
    // .content__date
    &__date {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
    // .content__message
    &__message {
      color: var(--white);
      font-family: Roboto Flex;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      padding: 10px 0;
    }
    // .content__created-date
    &__created-date {
      color: var(--gray);
      font-family: Roboto Flex;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 3px;
      padding-top: 6px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--white);
    }
    // .content__footer
    &__footer {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      padding: 14px 16px;
    }
    // .content__footer-input-icon
    &__footer-input-icon {
      display: flex;
      gap: 18px;
      width: 100%;
    }
    // .content__footer-icon
    &__footer-icon {
      color: var(--white);
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
    // .content__footer-input
    &__footer-input {
      padding-top: 3px;
      textarea {
        resize: none;
        color: var(--gray-300);
        font-family: Roboto Flex;
        font-size: 13px;
        font-weight: 400;
        line-height: normal;
        width: 300px;
        background-color: transparent;
      }
    }
    // .content__footer-send
    &__footer-send {
      button {
        color: var(--blue);
        font-family: Roboto Flex;
        font-size: 12px;
        font-weight: 700;
        line-height: normal;
        background-color: transparent;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 5px;
  }

  ::-webkit-scrollbar-track-piece {
    height: 5px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-radius: 20px;
    opacity: 0;
  }
</style>
