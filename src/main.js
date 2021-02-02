import {
  createApp
} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '/@/router/index.js'
import mixin from '/@/mixin/mixin.js'
// 导入截屏插件
import screenShort from "vue-web-screen-shot";
const app = createApp(App)
// 使用截屏插件
app.use(screenShort)
app.use(ElementPlus)
app.use(router)
app.mixin(mixin)
app.mount('#app')