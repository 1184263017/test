import {
    defineStore
} from 'pinia';
import {
    ref,
    computed
} from 'vue'

export const useUserStore = defineStore('user', () => {
    const age = ref(20);
    const name = ref('jack')
    const getAge = computed(() => {
        return age.value
    })
    const getName = computed(() => {
        return name.value + getAge.value;
    })

    function say(v = 0) {
        console.log('hello user', v);
    }

    function f1(v = 0) {
        say(v)
        // console.log('hello user');
    }

    function f2(v = 0) {
        const ShopStore = useShopStore();
        ShopStore.f3()
        // console.log('hello user');
    }
    return {
        age,
        name,
        say,
        getAge,
        getName,
        f1,
        f2
    }
});

export const useShopStore = defineStore('shop', {
    state: () => ({
        title: 'vue2',
        count: 55,
        num: 88
    }),
    getters: {
        g1() {
            // 获取其他模块定义的计算方法
            const userStore = useUserStore();
            return userStore.getAge;
        },
        g2(store) {
            return store.g1 + store.num
        },
        g3(store) {
            return (data) => {
                return data + store.count
            }
        }
    },
    actions: {
        f1() {
            const userStore = useUserStore();
            userStore.say();
        },
        f2() {
            this.f1();
        },
        f3() {
            console.log(this.title);
        }
    }
});