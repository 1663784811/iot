import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import persist from 'pinia-plugin-persist'
import router from '@/router/index.js';
import 'lib-flexible/flexible'


const pinia = createPinia();
pinia.use(persist);

const app = createApp(App);
app.use(router);
app.use(pinia);



app.mount('#app');
