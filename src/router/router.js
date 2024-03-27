import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: () => import("../mainPages/LandingPage.vue"),
    },

  ],
});

export default router;
