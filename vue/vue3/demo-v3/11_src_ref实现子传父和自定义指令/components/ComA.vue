<template>
    <div>
        <h2 v-Style>ComA</h2>
    </div>
</template>

<script setup>
import {ref,defineExpose} from 'vue';
const count = ref(10);
function add(a,b){
    return a+b;
}

// 简化写法
function vStyle(el){el.style.color = 'red'}
// 完整写法
// const vStyle = {
//     mounted(el) {
//         el.style.color = 'red'
//         console.log(el);
//     },
//     unmounted() {
        
//     },
// }
// 暴露
defineExpose({
    count,add
})
</script>

<style lang="scss" scoped>

</style>