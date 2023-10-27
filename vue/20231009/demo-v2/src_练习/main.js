import Vue from 'vue';
import App from './App.vue'
import store from './store';
import router from './router'

new Vue({
    render: (h) => {
        return h(App)
    },
    store,
    router,
}).$mount('#app')