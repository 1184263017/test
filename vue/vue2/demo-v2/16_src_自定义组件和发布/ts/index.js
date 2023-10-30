import TsInput from './TsInput.vue'
import TsBox from './TsBox.vue'

export default {
    install(Vue, option) {
        Vue.component('TsInput', TsInput)
        Vue.component('TsBox', TsBox)

        Vue.filter('abc', num => 'add' + num)

        // Vue.directives('css', {
        //     bind() {

        //     }
        // })
    }
}