import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { userManager } from "../authService";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/callback",
    name: "Callback",
    component: { render: () => null },
    beforeEnter: async (_to: any, _from: any, next: (arg0: string) => void) => {
      try {
        await userManager.signinCallback();
        next("/");
      } catch (error) {
        console.error("Error during the callback process", error);
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
