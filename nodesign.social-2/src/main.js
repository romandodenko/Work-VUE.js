import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import Site from './modules/document';

import Smooth from './modules/smooth-scroll';

import Webp from './modules/webp'

createApp(App).use(router).mount('#app');

Site();

Smooth();

Webp();