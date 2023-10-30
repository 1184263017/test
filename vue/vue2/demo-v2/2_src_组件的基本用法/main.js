import Vue from "vue";
import App from './App.vue'; // new Vue()实例对象
import Home from './Home.vue';
import Cart from './Cart.vue';

// 注册 <HomeABC></HomeABC>
Vue.component('Home',Home);
Vue.component('Cart',Cart);

new Vue({
  el: '#app',
  // template: '<div>hello app</div>',
  render: (h) => {
    // return h('div', ['hello app', h('p', ['hello', h('i', ['??'])]), h('b', ['!!'])])
    return h(App)
  }
});