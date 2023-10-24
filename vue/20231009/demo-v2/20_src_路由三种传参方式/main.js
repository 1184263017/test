import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import UserA from './components/UserA.vue'
import UserB from './components/UserB.vue'
import UserC from './components/UserC.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
      path: '/user/a',
      component: UserA,
    },
    {
      path: '/user/b/:id',
      component: UserB,
    },
    {
      path: '/user/c',
      component: UserC,
    },
    {
      path: '*',
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