const state = () => ({
    username: 'lili',
    age: 18
})
const getters = {
    getAge(state) {
        return state.age;
    }
}
const actions = {
    add(store, num) {
        store.state.age += num;
        console.log(store.state.age);
    }
}
const mutations = {
    SET_USERNAME(state, value = '') {
        state.username = value
    }
}
const namespaced = true;

const user = {
    state,
    getters,
    mutations,
    actions,
    namespaced
}

export default user;