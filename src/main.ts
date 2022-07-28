import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/index';
import { createSSRI18n } from './language/i18n';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// 创建i18n语言包实例
const i18n = createSSRI18n();

const app = createApp(App);
app.use(router);
app.use(i18n);
app.config.globalProperties.$message = ElMessage;
// app.use(ElementPlus);

app.mount('#app');
