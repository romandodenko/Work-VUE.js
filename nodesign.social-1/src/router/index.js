import {
  createRouter,
  createWebHistory
} from 'vue-router';

import HomeView from '../views/HomeView.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    component: () => import( /* webpackChunkName: "main" */ '../views/MainView.vue')
  },
  {
    path: '/game-1',
    name: 'game-1',
    component: () => import( /* webpackChunkName: "game-1" */ '../views/GameOneView.vue')
  },
  {
    path: '/game-2',
    name: 'game-2',
    component: () => import( /* webpackChunkName: "game-2" */ '../views/GameTwoView.vue')
  },
  {
    path: '/game-3',
    name: 'game-3',
    component: () => import( /* webpackChunkName: "game-3" */ '../views/GameThirdView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import( /* webpackChunkName: "terms" */ '../views/TermsView.vue')
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import( /* webpackChunkName: "policy" */ '../views/PolicyView.vue')
  },
  {
    path: '/cookie',
    name: 'cookie',
    component: () => import( /* webpackChunkName: "cookie" */ '../views/CookieView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;