import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: () => ({
        title: 'Vuex root',
        name: 'jack',
        num: 20,
    }),
    getters: {
        rootG(state, getters) {
            return state.num + getters.g1;
        },
        g1() {
            return 20;
        }
    },
    actions: {
        add(store, num) {
            store.state.num += num;
        }
    },
    mutations: {
        SET_TITLE(state, value) {
            state.title = value;
        }
    },
    modules: {
        user,
        a: {
            state: () => ({
                num: 1,
            }),
            actions: {
                f1(store) {
                    // console.log(store);
                    console.log(store.rootState);
                    console.log(store.rootGetters['user/userG']);
                }
            }
        }
    },

})

export default store;