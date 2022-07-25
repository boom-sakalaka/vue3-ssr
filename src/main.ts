import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/index';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$message = ElMessage;
// app.use(ElementPlus);
app.mount('#app');
