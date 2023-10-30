import Vue from 'vue';
import App from './App.vue';
import plugin from './plugin.js';

// import index from './ts/index.js'
// import ts from '../node_modules/ts11/index'
import ts from 'ts-w-test1'

Vue.use(ts);

// function use(obj, option) {
//   obj.install(Vue, option);
// }
// use(plugin,{a: 1,b: 2})
// Vue.use(plugin, {
//   a: 1,
//   b: 2
// });

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')