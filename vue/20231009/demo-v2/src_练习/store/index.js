import Vuex from 'vuex';
import Vue from 'vue';
import {
    SET_COUNT,
    SET_TITLE
} from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
    state() {
        return {
            title: 'hello store',
            name: 'jack',
            num: 18,
            count: 0,
        }
    },
    getters: {
        getName(state, getters) {
            return state.name + getters.getNum;
        },
        getNum(state) {
            return state.num
        }
    },
    mutations: {
        [SET_COUNT](state, value) {
            state.count += value;
        },
        [SET_TITLE](state, value) {
            state.title = value;
        }
    },
    actions: {}
})

export default store;