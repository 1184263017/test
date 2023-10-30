import Vue from 'vue';
import App from './App.vue';
import Pay from './components/Pay.vue';
import WxPay from './components/WxPay.vue';
import TsInput from './components/TsInput.vue';
import TsEmail from './components/TsEmail.vue';
import TsCart from './components/TsCart.vue';

// 注册组件
Vue.component('Pay', Pay)
Vue.component('WxPay', WxPay)
Vue.component('TsInput', TsInput)
Vue.component('TsEmail', TsEmail)
Vue.component('TsCart', TsCart)

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')