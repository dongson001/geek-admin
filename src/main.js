import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import sotre from "./sotre/index";
import element3 from 'element3';
import 'element3/lib/theme-chalk/index.css'

createApp(App).use(element3).use(sotre).use(router).mount("#app");
