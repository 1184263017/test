import Vue from 'vue';
// 导入vuex
import Vuex from 'vuex';
import user from './modules/user'
import {
    SET_COUNT,
    SAY,
    ADD
} from './mutations'

// 将全局对象stroe注入到每一个vue实例中
Vue.use(Vuex);

// 创建全局对象
const store = new Vuex.Store({
    // data 状态
    state() {
        return {
            title: 'hello vuex',
            firstName: 'li',
            lastNmae: 'jack',
            num1: 100,
            num2: 200,
            count: 20,
        }
    },
    // computed
    getters: {
        fullName(state, getters) {
            // $store.state.firstName  也可以拿到
            return `${state.firstName} - ${state.lastNmae} - ${getters.g1}`
        },
        g1() {
            return 1000
        },
    },
    // methods 方法
    mutations: {
        [SAY](state) {
            console.log(state.title);
        },
        [ADD](state, value) {
            console.log(state.num1 + state.num2 + value);
        },
        [SET_COUNT](state, num = 1) {
            state.count += num;
        },
        SET_TITLE(state, str = '') {
            setTimeout(() => {
                state.title = str;
            }, 2000);
        },
    },
    actions: {
        add(store, data) {
            // setTimeout(() => {
            //     console.log(store.state.title);
            //     console.log(store.getters.g1);
            //     console.log(store.commit('SET_COUNT'), store.state.count);
            // }, 3000);
            // console.log(data);
            // return new Promise((resolve, reject) => {
            //     // resolve(data);
            //     setTimeout(() => {
            //         reject(data);
            //     }, 3000)

            // })

            // return 10 + data
        },
    },
    // children
    modules: {
        user,
        b: {
            namespaced: true,
            state: () => ({
                title: 'module b title'
            }),
            getters: {
                getTitle() {
                    return 100;
                }
            },
            mutations: {
                SET_TITLE(state, value) {
                    state.title = value
                }
            },
            actions: {
                add(store, obj) {
                    console.log(obj.a + obj.b);
                }
            },
            modules: {
                b1: {
                    getters: {
                        getB1() {
                            return 'b1'
                        }
                    }
                }
            }
        },
        c: {
            state: () => ({
                title: 'module c title'
            }),
            getters: {
                getTitleC(state, getters, rootState, rootGetters) {
                    return 300 + rootState.num1 + rootGetters.g1;
                }
            },
            mutations: {
                SET_TITLE(state, value) {
                    state.title = value
                }
            },
            actions: {
                addC(store, obj) {
                    console.log(obj.a + obj.b + store.rootState.num1 + store.rootGetters.g1);
                }
            },
        },
    }
})

export default store