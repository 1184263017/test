<template>
    <div>
        <h2>home</h2>
        {{ title }}
        <hr>
        {{ typeof a }}
        <hr>
        {{ typeof b }}
        <hr>
        <Cart></Cart>
    </div>
</template>

<script>
export default {
    name: 'Home',
    // 可以设定参数
    props:['a','b','title'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>