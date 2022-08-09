// import home from '@/views/home/index.vue';
// import mine from '@/views/mine/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // 富文本封装使用
  {
    path: '/richText',
    name: 'componentsTest',
    component: () => import('@/views/richText/index.vue'),
  },

  {
    path: '/message', // 封装 element 的elmessage
    name: 'message',
    component: () => import('@/views/message/index.vue'),
  },

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
