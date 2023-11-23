import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/layout/layoutIndex.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginIndex.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
