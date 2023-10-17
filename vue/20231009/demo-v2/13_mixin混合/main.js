import Vue from 'vue';
import App from './App.vue';
import {
  obj1,
  obj2
} from './mixin';

// Vue.prototype.title = 'haha'

// Vue.mixin(obj1)
// Vue.mixin(obj2)

Vue.mixin({
  // 属性
  data() {
    return {
      title: 'haha',
      count: 20
    };
  },
  // 方法
  methods: {
    say() {
      console.log('xixixix');
    }
  },
  computed: {
    fullName() {
      return 'jack li' + this.title;
    }
  },
  created() {
    console.log('我是混入的生命周期钩子');
  }
});

const vm = new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')

console.log(vm);