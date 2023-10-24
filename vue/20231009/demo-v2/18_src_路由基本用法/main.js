import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import UserA from "./components/UserA.vue";
import UserB from "./components/UserB.vue";
import UserC from "./components/UserC.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '/user/:a/:id',
      component: UserA,
    },
    {
      path: '/user/b',
      component: UserB,
    },
    {
      path: '/user/c',
      component: UserC,
    }
  ],
});


// Vue.mixin({
//   computed: {
//     ro() {
//       return this.$root.$options.abc;
//     }
//   }
// })


const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  abc: {
    a: 1
  },
  router,
}).$mount('#app')

// console.log(vm);