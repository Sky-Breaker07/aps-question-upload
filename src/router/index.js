import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Uploadquestion from "../views/Uploadquestion.vue";
import Notfound from "../views/Notfound.vue";
import Unauthorized from "../views/Unauthorized.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/uploadquestion",
      name: "uploadquestion",
      component: Uploadquestion,
    },
    {
      path: "/unauthorized",
      name: "unauthorized",
      component: Unauthorized,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: Notfound,
    },
  ],
});

export default router;
