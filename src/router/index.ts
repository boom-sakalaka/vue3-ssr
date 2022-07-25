// import home from '@/views/home/index.vue';
// import mine from '@/views/mine/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '',
      keepAlive: false,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      title: '',
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
