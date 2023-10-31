<template>
    <div>
        <h2>App</h2>
        {{ obj.age }}
        {{ obj }}
        <button @click="objAdd">obj.age++</button>
        <button @click="obj.size.w++">obj.size.w++</button>
        <hr>
        {{ obj1 }}
        <button @click="obj1 = { a: 1, b: 2 }">obj1</button>
        <hr>
        {{ obj2 }}
        <button @click="obj2Add">obj2.age++</button>
        <hr>
        {{ obj3 }}
        <button @click="obj3Add">obj3.age++</button>
        <hr>
        {{ age }}
        <button @click="obj4Add">obj4.age++</button>

        <hr>
        <!-- {{ console.log(user.size) }} -->
        {{ user.size.value.w }}
        {{ user.age }}
        <button @click="obj5Add">obj5.age++</button>
        <hr>
        {{ lastName }} - {{ firstName }}
        {{ funllName }}
        <button @click="fullName = 'xixi haha'">save fullname</button>
    </div>
</template>

<script setup>
import { ref, shallowRef, reactive, shallowReactive, toRef, toRefs, watch, computed } from 'vue';
const lastName = ref('liu');
const firstName = ref('wang');

const funllName = computed(() => {
    return `${lastName.value} - ${firstName.value}`
});

const fullName = computed({
    get() { return `${lastName.value} - ${firstName.value}` },
    set(v) { [lastName.value, firstName.value] = v.split(' ') }
})

const obj = ref({
    name: 'jack',
    age: 18,
    size: {
        w: 100,
        h: 200
    }
});
function objAdd() {
    obj.value.age++
};
const obj1 = shallowRef({
    name: 'jack',
    age: 18,
    size: {
        w: 100,
        h: 200
    }
});
function obj1Add() {
    // obj1 = { a: 1, b: 2 }
    // obj1.value.age++
};


const obj2 = reactive({
    name: 'jack',
    age: 18,
    size: {
        w: 100,
        h: 200
    }
});
function obj2Add() {
    obj2.size.w++
};

const obj3 = shallowReactive({
    name: 'jack',
    age: 18,
    size: {
        w: 100,
        h: 200
    }
});
function obj3Add() {
    // obj3.size.w++
    obj3.age++
};

const age = toRef(obj2, 'age');
console.log(age.value);
function obj4Add() {
    age.value++
};

const user = toRefs(obj3);
// console.log(user.size.value.w);
function obj5Add() {
    // user.age.value++
    user.size.value.w++
    // console.log(user.size.value.w);
};


watch(() => obj.value.size.w, (a, b) => {
    console.log(a, b);
})
watch(() => ({ ...obj.value.size }), (a, b) => {
    console.log(a, b);
})
watch(() => [obj.value.name, obj.value.age], (a, b) => {
    console.log(a, b);
})
</script>

<style lang="scss" scoped></style>