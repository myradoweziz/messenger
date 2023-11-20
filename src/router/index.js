import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'feed',
    component: () => import('@/views/FeedView.vue'),
    meta: { layout: 'default' }
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import('@/views/PublicationsView.vue'),
    meta: { layout: 'default' }
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('@/views/MusicView.vue'),
    meta: { layout: 'default' }
  },
  {
    path: '/music-playlist',
    name: 'music-playlist',
    component: () => import('@/views/MusicPlaylistView.vue'),
    meta: { layout: 'default' }
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('@/views/FilmsView.vue'),
    meta: { layout: 'default' }
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('@/views/BooksView.vue'),
    meta: { layout: 'default' }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
