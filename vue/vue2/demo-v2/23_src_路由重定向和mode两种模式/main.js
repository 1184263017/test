import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import UserA from './components/UserA.vue'
import UserA1 from './components/UserA1.vue'
import UserA2 from './components/UserA2.vue'
import UserA21 from './components/UserA21.vue'
import UserB from './components/UserB.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  // mode:'hash',
  mode: 'history',
  routes: [{
      name: 'user',
      path: '/user',
      component: UserA,
      // redirect: '/user/b/500',   // 重定向,用path跳转
      redirect: '/b/500', // 重定向,用alias跳转
      // redirect: {                // 重定向,用name跳转
      //   name: 'NotFound',
      // },
    },
    {
      name: 'userb',
      path: '/user/b/:id',
      alias: '/b/:id', //别名 简化path写法
      component: UserB,
      props: true
      // props:{default:true,a:true,b:true}     // 如果是多组件视图的话必须每个视图单独设置props
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  router
}).$mount('#app')