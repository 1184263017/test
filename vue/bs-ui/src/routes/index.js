import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/layout/LayoutIndex.vue'),
      meta: { name: '组件封装' },
      children: [
        {
          path: '/button',
          name: 'button',
          component: () => import('../views/button/Button.vue'),
          meta: {
            name: '按钮',
          },
        },
        {
          path: '/card',
          name: 'card',
          component: () => import('../views/card/Card.vue'),
          meta: {
            name: '卡片',
          },
        },
        {
          path: '/table',
          name: 'table',
          component: () => import('../views/table/Table.vue'),
          meta: {
            name: '表格',
          },
        },
      ],
    },
  ],
});

export default router;
