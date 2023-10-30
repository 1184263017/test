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
  routes: [{
      name: 'user',
      path: '/user',
      // component: UserA,
      components: {
        default: UserA1,
        a: UserA,
      },
      children: [{
        name: 'user-a1',
        path: 'a1',
        // component: UserA1,
        components: {
          default: UserB,
          a1: NotFound,
          a2: UserA2,
        }
      }, {
        name: 'user-a2',
        path: 'a2',
        component: UserA2,
        children: [{
          name: 'user-a21',
          path: 'a21',
          component: UserA21,
        }]
      }]
    },
    {
      name: 'userb',
      path: '/user/b/:id',
      component: UserB,
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