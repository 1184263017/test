import Vue from 'vue';
import App from './App.vue';
import TsCart from './components/TsCart.vue';

// 注册组件
Vue.component('TsCart', TsCart)

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')