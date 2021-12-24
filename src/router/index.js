import { createWebHashHistory, createRouter } from "vue-router";
// import { createWebHashHistory, createRouter } from "./grouter";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Login from '../pages/Login.vue';
const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
