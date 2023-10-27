import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js'

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  router
}).$mount('#app')