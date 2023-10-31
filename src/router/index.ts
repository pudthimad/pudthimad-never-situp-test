import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PermutationsPage from "@/views/PermutationsPages.vue";
import OddIntPage from "@/views/OddIntPages.vue";
import SmileyPage from "@/views/SmileyPages.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/permutations",
    name: "permutations",
    component: PermutationsPage,
  },
  {
    path: "/odd-int",
    name: "odd-int",
    component: OddIntPage,
  },
  {
    path: "/smiley-face",
    name: "smiley-face",
    component: SmileyPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
