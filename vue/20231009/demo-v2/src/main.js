import Vue from 'vue';
import App from './App.vue';

Vue.directive('css', {
  bind(el) {
    // 当指令被绑定到dom/组件的时候执行
    console.log(el);
    el.style.color = 'red'
  },
  unbind() {
    // 当dom/组件销毁的时候执行
  },
})

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')