import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import sotre from "./sotre/index";

createApp(App).use(sotre).use(router).mount("#app");
