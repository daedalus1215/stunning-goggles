import { createRouter, createWebHistory } from "vue-router";
import CallbackHandler from "../components/CallbackHandler.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/callback", component: CallbackHandler },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
