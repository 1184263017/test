import Vue from 'vue';
import App from './App.vue';

// import {
//   Dialog,
//   Button,
//   MessageBox,
//   Form,
//   FormItem
//   // Message
// } from 'element-ui'
// Vue.component(FormItem.name, FormItem);
// Vue.component(Form.name, Form);
// Vue.component(Button.name, Button);
// Vue.component(Dialog.name, Dialog);
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.use(Message);
// Vue.prototype.$message = Message;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router';
import MainBody from "./components/MainBody.vue";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  router: [{
    path: '/main',
    component: MainBody
  }]
})

const vm = new Vue({
  render: (h) => {
    return h(App)
  },
  router
}).$mount('#app')