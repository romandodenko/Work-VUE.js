import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import Doc from './modules/document';

import Smooth from './modules/smooth-scroll';

createApp(App).use(router).mount('#app');

Doc();

Smooth();