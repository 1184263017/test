import Vue from 'vue';
import App from './App.vue';
import TsHome from './components/TsHome'
import TsCard from './components/ts-card'

Vue.component('TsHome',TsHome)
Vue.component('ts-card',TsCard)

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')