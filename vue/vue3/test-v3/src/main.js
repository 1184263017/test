import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';

const app = createApp(App).use(router).use(ElementPlus);
app.config.errorHandler = (err) => {
  console.error(err);
};
app.mount('#app');
