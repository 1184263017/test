# Vuex 状态管理

## 安装使用

1. `npm install vuex@3 --save` V2只兼容3版本vuex
2. 导入 `import Vuex from 'vuex'`
3. 实例化对象 `const store = new Vuex.Store({})`
4. `Vue.use(Vuex)` 将全局对象stroe注入到每一个vue实例中,可以通过 `this.$store` 访问

## store 对象配置选项

1. state 状态 => data
2. getter 计算属性 => computed
3. mutations,actions 方法 => methods

### state

1. 如果多次访问一个状态,建议将状态转成vue实例计算属性
2. 可以使用vue实例中的computed的get和set设置状态(state)的可读可写
```js
computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.state.title = value;
      },
    },
  },
```

### Getter

1. 状态计算属性,只能对状态state进行计算,computed可以对一切进行计算
2. 状态计算属性的第一个参数就是状态(state)对象,可以用来获取状态的所有属性
3. getter 方法的第二个参数,保存了当前getters中其他计算状态属性
4. 访问状态计算属性,`this.$store.getters.fullName`
5. 可以使用vue实例中的computed的get设置为vue对象的计算属性(只读不可改)
```js
    getters: {
        fullName(state, getters) {
            // $store.state.firstName  也可以拿到
            return `${state.firstName} - ${state.lastNmae} - ${getters.g1}`
        },
        g1() {
            return 100
        },
    },
```
```js
    fullName() {
      return this.$store.getters.fullName;
    },
```

### mutations

1. 第一个参数是state对象
2. store.commit(方法名)
3. 第二个参数可以手动传入 `store.commit(方法,第二个参数)`

**使用场景和约定**

1. 修改状态
2. 命名约定1,单词全部大写,多个单词使用下划线分割
3. 命名约定2,将所有的方法定义成常量,常量全部大写,多个单词使用下划线分割,常量值和常量名称,字符一样,避免重复定义相同名称
4. 命名约定3,将所有的常量,模块化,放在一个独立的js中,一般在大型项目中使用,方便对mutations进行统一管理
5. vue 组件中使用: 将mutations使用方法精简下(重新包装下),commit中出现方法名的地方,使用常量替换(大项目中会用到)

**代码规范**

1. 返回值没有任何意义,不需要返回值
2. 设置状态的代码必须同步,不能写异步代码


commit 执行过程

1. commit() 方法执行 devtool 工具中留下历史记录
2. 希望在留下历史记录的同时,发生状态的改变,所以要求状态的改变也必须同步


### Action 

调用 `$store.dispatch(方法名)`

**参数**
add(参数1)

- 参数1:表示的是整个状态对象,相当与 `$store` 所以可以在action中获取state,getter,调用mutations和action,也可以写异步
- 参数2:可以接受任意类型的数据

**返回值**

- 返回值数据类型默认是一个promise对象,通常想要自定义返回值可以手动设置这个返回对象
```js
    // 可以异步resolve
    return new Promise((resolve, reject) => {
        resolve(data);
    })
    // 只能同步
    return 10+data
```


### module
访问 $store.state.模块名称
对数据进行分类,多个模块可以互相嵌套,可以理解为文件夹的嵌套关系,每个模块的解构都是一样的,模块层级不限,一般建议不要超过3层

模块中 **state** 读写
- 根据模块路径进行读写
- 访问语法 `$store.state.模块1.模块2.属性名`

模块中 **getter**
- 默认没有模块空间的概念,所以在定义的时候不同模块间的getter不能重名
- `namespaced: true` 开启命名空间,开启后不同模块的属性或方法可以重名,所有状态都必须通过模块路径访问
- 访问语法 `$store.getters['模块1/模块2/.../属性名']`

模块中 **mutations** 和 **actions**
- mutations 访问语法:`$store.commit('模块1/模块2/.../方法名')`
- action 访问语法:`$store.dispatch('模块1/模块2/.../方法名')`

### 模块的局部状态

1. 所有的模块 getters,actions,mutations 只能访问模块中的状态
2. getters第三个参数可以访问root下的state,第四个参数可以访问root下的getters(rootState, rootGetters)
3. actions > store.rootState属性可以访问root下的state
4. actions > store.rootGetters属性可以访问root下的getters


## Vuex 辅助函数

1. state getters 定义计算属性进行简化
2. mutations actions 定义方法进行简化

### mapState

简化 state->computed 定义过程
- mapState 依赖state生成计算属性,并返回一个对象,对象中包含多个计算属性
- root->state 语法 mapState({计算属性名:'state属性名'})
- 模块->state 语法 mapState('模块路径',{计算属性名:'state属性名'})
- 简写 `{计算属性名:'state属性名'}` 如果计算属性名和state属性名一致,可以简写`['state属性名']`

### mapGetters

简化 getters -> computed 定义过程

- mapGetters 依赖getters生成计算属性,并返回一个对象,对象中包含多个计算属性
- root->getters 语法 mapGetters({计算属性名:'getters属性名'})
- 模块->getters 语法 mapGetters('模块路径',{计算属性名:'getters'})
- 简写 `{计算属性名:'getters属性名'}` 如果计算属性名和getters属性名一致,可以简写`['getters属性名']`

### mapMutations

简化 mutations -> computed 定义过程

- mapMutations 依赖mutations生成计算属性,并返回一个对象,对象中包含多个计算属性
- root->mutations 语法 mapMutations({计算属性名:'mutations属性名'})
- 模块->mutations 语法 mapMutations('模块路径',{计算属性名:'mutations'})
- 简写 `{计算属性名:'mutations属性名'}` 如果计算属性名和mutations属性名一致,可以简写`['mutations属性名']`


### mapActions

简化 actions -> computed 定义过程

- mapActions 依赖actions生成计算属性,并返回一个对象,对象中包含多个计算属性
- root->actions 语法 mapActions({计算属性名:'actions属性名'})
- 模块->actions 语法 mapActions('模块路径',{计算属性名:'actions'})
- 简写 `{计算属性名:'actions属性名'}` 如果计算属性名和actions属性名一致,可以简写`['actions属性名']`


## 严格模式

1. `strict:true` 开发模式下使用
2. `strict:true` 生产环境下使用 `npm run build` 时修改为false

### process.env.NODE_ENV 环境变量

1. 记录当前程序运行的环境
2. production(生成环境) development(开发环境)
