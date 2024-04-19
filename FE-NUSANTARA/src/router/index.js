import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login.vue";
import dashboard from "@/views/dashboard.vue";
const routes = [
  {
    path: "/login",
    component: login,
  },
  {
    path: "/dashboard",
    component: dashboard,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
