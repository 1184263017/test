import {
    getUserList
} from '@/api/userApi';

const actions = {
    add(store, value) {
        store.state.title = store.state.title + value;
    },
    async getUsers(store) {
        const res = await getUserList();
        console.log(res);
        store.commit('SET_USER_LIST', res)
    }
}

export default actions;