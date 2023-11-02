import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.errorHandler = err => {
    console.log(err);
}
import TsCard from './components/TsCard'

app.mount('#app')