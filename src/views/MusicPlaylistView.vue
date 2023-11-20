<script setup>
  import Icon from '@/components/base/Icon.vue'
</script>

<template>
  <section class="music-playlist">
    <div class="music-playlist__container">
      <div class="music-playlist__content">
        <div class="music-playlist__image">
          <img src="../assets/img/playlist.png" alt="" />
        </div>
        <div class="music-playlist__title">
          <p>Акустические хиты</p>
          <span>Playlist</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <div class="music-playlist__table-title">Песня</div>
            </th>
            <th>
              <div class="music-playlist__table-title">Артист</div>
            </th>
            <th>
              <div class="music-playlist__table-title">Альбом</div>
            </th>
            <th>
              <div class="music-playlist__table-title">Длительность</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10">
            <td class="music-playlist__image-title">
              <div class="music-playlist__music-image">
                <img src="../assets/img/playlist2.png" alt="" />
              </div>
              <div class="music-playlist__music-title">Let’s Go Home Together (Apple Music Home Sessi…</div>
            </td>
            <td class="music-playlist__music-author">Ella Henderson Tom Grennan</td>
            <td class="music-playlist__music-album">Apple Music Home Session: Ella Hende…</td>
            <td class="music-playlist__music-delay">
              <div class="music-playlist__music-time">3:38</div>
              <div class="music-playlist__music-icon">
                <icon name="bookmark" />
              </div>
              <div class="music-playlist__music-plus">
                <icon name="playlistPlus" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .music-playlist {
    padding-top: 100px;
    background-color: var(--background);
    height: 100%;
    min-height: 100vh;
    padding-bottom: 20px;
    // .music-playlist__container
    &__container {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .music-playlist__content
    &__content {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-bottom: 34px;
    }
    // .music-playlist__image
    &__image {
    }
    // .music-playlist__title
    &__title {
      color: var(--white);
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      span {
        color: var(--white);
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
      }
    }
    // .music-playlist__table-title
    &__table-title {
      color: var(--music-desc);
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      &:not(:first-child) {
        padding-left: 14px;
        border-left: 0.5px solid rgba(255, 255, 255, 0.1);
      }
    }
    // .music-playlist__image-title
    &__image-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    // .music-playlist__music-image
    &__music-image {
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0px 0px 0px 1px rgba(128, 128, 128, 0.1) inset;
    }
    // .music-playlist__music-title
    &__music-title {
      color: var(--white);
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
    }
    // .music-playlist__music-author
    &__music-author {
      color: var(--music-desc);
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
    }
    // .music-playlist__music-album
    &__music-album {
      @extend .music-playlist__music-author;
    }
    // .music-playlist__music-delay
    &__music-delay {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    // .music-playlist__music-time
    &__music-time {
      color: var(--music-desc);
      font-size: 13px;
      font-weight: 400;
      line-height: 38px;
      cursor: pointer;
    }
    // .music-playlist__music-icon
    &__music-icon {
      @extend .music-playlist__music-time;
    }
    // .music-playlist__music-plus
    &__music-plus {
      @extend .music-playlist__music-time;
      color: var(--white);
      :deep(svg) {
        width: 24px;
        height: 24px;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      width: 100%;
      tr {
        th {
          text-align: left;
          padding-bottom: 12px;
        }
      }
    }
    tbody {
      tr {
        &:hover {
          background: rgba(255, 255, 255, 0.06) !important;
        }
        &:nth-child(even) {
          background: rgba(255, 255, 255, 0.02);
        }
        td {
          cursor: pointer;
        }
      }
    }
  }
</style>
