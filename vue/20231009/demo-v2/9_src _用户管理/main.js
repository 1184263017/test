import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')