import Vue from 'vue';
// 导入vuex
import Vuex from 'vuex';

// 将全局对象stroe注入到每一个vue实例中
Vue.use(Vuex);

// 创建全局对象
const store = new Vuex.Store({
    // data 状态
    state() {
        return {
            title: 'hello root',
            num: 10
        }
    },
    // computed
    getters: {
        g() {
            return 100;
        }
    },
    // methods 方法
    mutations: {
        SETR() {
            console.log('root SETR');
        }
    },
    actions: {
        addRoot(store, num) {
            console.log(store.state.num + num);
        }
    },
    modules: {
        a: {
            namespaced: true,
            state: () => ({
                title: 'hello a',
                num: 20
            }),
            getters: {
                ga() {
                    return 200;
                }
            },
            mutations: {
                SETA() {
                    console.log('a SETA');
                }
            },
            actions: {
                addA(store, num) {
                    console.log(store.state.num + num);
                }
            },
            modules: {
                a1: {
                    namespaced: true,
                    state: () => ({
                        title: 'hello a1',
                        num: 30
                    }),
                    getters: {
                        ga1() {
                            return 300;
                        }
                    },
                    mutations: {
                        SETAA1() {
                            console.log('a/a1 SETAA1');
                        }
                    },
                    actions: {
                        addAA1(store, num) {
                            console.log(store.state.num + num);
                        }
                    },
                }
            }
        }
    }
})

export default store