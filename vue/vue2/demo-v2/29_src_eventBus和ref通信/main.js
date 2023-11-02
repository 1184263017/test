import Vue from "vue";
import App from './App.vue';

// 小型 vuex
Vue.prototype.eventBus = new Vue({
    data() {
        return {
            title: 'hello eventbus',
            count: 10,
        }
    }
})
new Vue({
    render: (h) => h(App),
}).$mount('#app')

console.log(process.env.NODE_ENV);