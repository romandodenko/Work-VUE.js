import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import DocSite from './modules/document';

import Smooth from './modules/smooth-scroll';

import WebpInit from './modules/webp';

createApp(App).use(router).mount('#app');

DocSite();

Smooth();

WebpInit();
