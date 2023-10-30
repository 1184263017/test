import Vue from 'vue';
import App from './App.vue';

// 同步导入,阻塞代码执行,不管组件是否注册都会被调用一次
// import UsersTable from './components/UsersTable';
// import UsersA from './components/UsersA';
import UsersB from './components/UsersB';
// Vue.component('UsersTable',UsersTable)
// Vue.component('UsersA',UsersA)
Vue.component('UsersB', UsersB)

// 异步导入,不阻塞代码执行,组件调用才会被执行
// Vue.component('UsersTable', () => import('./components/UsersTable.vue'))
Vue.component('UsersA', () => import('./components/UsersA.vue'))
// Vue.component('UsersB', () => import('./components/UsersB.vue'))

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')