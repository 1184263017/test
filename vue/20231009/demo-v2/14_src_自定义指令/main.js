import Vue from 'vue';
import App from './App.vue';

Vue.directive('css', {
  bind(el, binding) {
    // 当指令被绑定到dom/组件的时候执行
    // console.log(el, binding);
    // binding.name:binding.arg.binding.modifiers = binding.value
    // binding.arg        : 后面传入的参数
    // binding.value      = 后面传入的表达式
    // binding.modifiers  . 后面传入的修饰符
    el.style[binding.arg] = binding.value;
    if (binding.modifiers.b) {
      el.style.fontWeight = 'bold';
    }
    if (binding.modifiers.i) {
      el.style.fontStyle = 'italic';
    }
  },
  unbind() {
    // 当dom/组件销毁的时候执行
    // console.log('销毁了哦');
  },
})

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#app')