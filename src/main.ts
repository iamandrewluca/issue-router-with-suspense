import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Id from './id.vue';
import Home from './home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:id', component: Id },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
