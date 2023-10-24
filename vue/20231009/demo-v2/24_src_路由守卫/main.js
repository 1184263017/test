import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import UserA from './components/UserA.vue'
import UserC from './components/UserC.vue'
import UserB from './components/UserB.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  routes: [{
      name: 'user',
      path: '/user/a',
      component: UserA,
    },
    {
      name: 'userb',
      path: '/user/b',
      component: UserB,
      beforeEnter(to, from, next) {
        console.log('beforeEnter', to, from);
        next()
      }
    },
    {
      name: 'userc',
      path: '/user/c',
      component: UserC,
      beforeEnter(to, from, next) {
        console.log('beforeEnter C', to, from);
        next()
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});
// 接受next 传的错误信息
router.onError(err => console.log(err))
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from);
  // if (to.name === 'userc') {
  // if (from.name === 'userc') {
  // if (from.name === 'userc' && to.name === 'user') {
  // next(false);
  // next(new Error('....'));
  // next({
  //   name: 'userb'
  // });
  // next('/user/b');
  // } else {
  next();
  // }

})
router.afterEach((to, from) => {
  console.log('afterEach', to, from);
})

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  router
}).$mount('#app')