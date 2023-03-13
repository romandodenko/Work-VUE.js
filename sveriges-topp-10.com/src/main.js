import { createApp } from 'vue';

import App from './App.vue';

import Doc from './modules/document';

import Smooth from './modules/smooth-scroll';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

Doc();

Smooth();