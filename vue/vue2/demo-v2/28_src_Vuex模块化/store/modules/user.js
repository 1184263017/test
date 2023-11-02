const state = () => ({
    title: 'user vuex'
})
const actions = {
    add(store, value) {
        store.state.title = store.state.title + value;
    }
};
const mutations = {
    SET_TITLE(state, value) {
        state.title = value
    }
};
const getters = {};
const namespaced = true;

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced
}