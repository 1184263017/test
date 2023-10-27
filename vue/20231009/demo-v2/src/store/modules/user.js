const state = () => ({
    title: 'Vuex user',
    name: 'tom',
    num: 55
});
const actions = {
    add(store, num) {
        store.state.num += num;
    }
};
const mutations = {
    SET_TITLE(state, value) {
        state.title = value;
    }
};
const getters = {
    userG(state, getters, rootState, rootGetters) {
        return 'user getters'
    }
};
const namespaced = true;

const user = {
    state,
    actions,
    mutations,
    getters,
    namespaced,
}

export default user;