import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';

Vue.config.productionTip = false;

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  // router,
  store
}).$mount('#app')