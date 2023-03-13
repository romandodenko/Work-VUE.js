import { createRouter, createWebHashHistory  } from 'vue-router';

import ComponentIndex from './components/ComponentIndex.vue';

import ComponentMain from './components/ComponentMain.vue';

import Terms from './components/Terms.vue';

import Cookie from './components/Cookie.vue';

import Policy from './components/Policy.vue';

import GameOne from './components/Game-1.vue';

import GameTwo from './components/Game-2.vue';

import GameThird from './components/Game-3.vue';

export default createRouter({
  history: createWebHashHistory (),
  routes: [
    {path: '/', component: ComponentIndex, alias: '/'},
    {path: '/main', component: ComponentMain, alias: '/'},
    {path: '/terms', component: Terms, alias: '/'},
    {path: '/cookie', component: Cookie, alias: '/'},
    {path: '/policy', component: Policy, alias: '/'},
    {path: '/GameOne', component: GameOne, alias: '/'},
    {path: '/GameTwo', component: GameTwo, alias: '/'},
    {path: '/GameThird', component: GameThird, alias: '/'},
  ]
});