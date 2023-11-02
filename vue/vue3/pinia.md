# oinia 状态管理

## 安装

npm install pinia

## defineStore

定义状态
```js
export const useInfoStore = defineStore('info', {
    state() {
        return {
            title: 'hello info'
        }
    }
})
```

1. 保存状态的变量必须 `use变量名Stroe`
2. 参数1: 在调试工具中唯一表示当前状态对象
3. 参数2: 有两种配置方式,1是选项是，2setup写法

### 选项式
```js
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
```

### setup写法
```js
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
```

## 使用 store

在哪里使用在哪里导入
```js
import {useInfoStore} from '@/store';
// 获取的状态对象
const infoStore = useInfoStore();
```

1. 选项式: 将state,getters当中对象的属性,将actions当作对象的方法,action中的this指向当前store对象
2. setup: 将ref和computer变量当中对象属性,将函数当作对象的方法
3. 在对状态对象直接解构的时候,会丢失数据响应,可以使用storeToRefs包装后再解构
```js
import {storeToRefs} from 'pinia'
import {useShopStore} from '@/store';
const shopStore = useShopStore();
// 解决解构丢失响应性的问题
const {count} = storeToRefs(shopStore);
```


## state

1. 直接修改
2. 重置state,$reset 将状态的所有值变为初始值(setup无法使用)
3. 变更state,$patch 对状态的批量修改

## Getter

访问本对象中的其他getter

1. option 选项式,使用`this.getter属性名`
2. setup 模式,直接访问计算属性名

访问其他对象中的其他getter

1. 获取(导入)其他状态模块
2. 执行获取模块的状态对象
3. 通过`对象.getter名`访问

向getter 传递参数

1. 闭包,计算属性返回一个函数
2. 可以看做将计算属性当做方法使用

## Actions

访问本对象中的其他Actions

1. option 选项式,使用`this.Actions属性名`
2. setup 模式,直接访问方法名


访问其他对象中的其他Actions

1. 获取(导入)其他状态模块
2. 执行获取模块的状态对象
3. 通过`对象.Actions名`访问