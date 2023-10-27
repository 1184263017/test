import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  router
}).$mount('#app')