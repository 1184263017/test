import Vue from 'vue';
import App from './App.vue';

Vue.filter('abc', v => 'abc' + v)

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')