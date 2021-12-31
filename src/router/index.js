import { createWebHashHistory, createRouter } from 'vue-router';
// import { createWebHashHistory, createRouter } from "./grouter";

import { getToken } from '../utils/utils';

import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Login from '../pages/Login.vue';
const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const token = getToken();
  if (!token && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});
export default router;
