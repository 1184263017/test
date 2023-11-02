import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js';
import actions from './actions.js';
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state: () => ({
        title: 'root vuex',
        userList: []
    }),
    getters: {},
    actions,
    mutations,
    modules: {
        user,
    }

})

export default store