import {
    defineStore
} from 'pinia';
import { computed, reactive, ref } from 'vue';

// v2写法
export const useInfoStore = defineStore('info', {
    state:()=>({title:'info',count:100}),
    getters:{
        g1:(state)=>{
            console.log(state.title);
        }
    },
    actions:{
        say(){
            console.log(this.title);
        }
    }
})

// v3写法
export const useShopStore = defineStore('shop',()=>{
    const count = ref(100);
    const title = ref('shop');
    const obj = reactive({
        name:'jack',
        age:20
    })
    const g1 = computed(()=>{
        return title.value + 'hello'
    })
    const g2 = computed(()=>{
        return obj.name;
    })
    function say(){
        console.log('shop');
    }
    return {
        count,
        title,
        g1,
        say,
        g2
    }
})


export const useCardStore = defineStore('card', {
    state() {
        return {
            title: 'hello card'
        }
    }
})