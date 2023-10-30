export default {
    install(Vue, option) {
        console.log(option);
        Vue.filter('abc', v => 'abc' + v);
        Vue.component('ABC', {});
        Vue.directive('Main', {});
    }
};