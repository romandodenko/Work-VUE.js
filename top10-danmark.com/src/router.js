import { createRouter, createWebHashHistory } from 'vue-router';

import Main from './components/Main.vue';

import FirstComponent from './components/FirstComponent.vue';

import GameOne from './components/Game-1.vue';

import GameTwo from './components/Game-2.vue';

import GameFree from './components/Game-3.vue';

import Terms from './components/Terms.vue';

import Policy from './components/Policy.vue';

import Cookie from './components/Cookie.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: FirstComponent, alias: '/'},
    {path: '/main', component: Main, alias: '/'},
    {path: '/game-1', component: GameOne, alias: '/'},
    {path: '/game-2', component: GameTwo, alias: '/'},
    {path: '/game-3', component: GameFree, alias: '/'},
    {path: '/terms', component: Terms, alias: '/'},
    {path: '/policy', component: Policy, alias: '/'},
    {path: '/cookie', component: Cookie, alias: '/'},
  ]
});