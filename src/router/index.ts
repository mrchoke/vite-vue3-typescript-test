import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Bills from "../views/Bills.vue";
import BillsReport from "../views/BillsReport.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/hello",
      name: "Hello",
      component: HelloWorld,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/bills",
      name: "Bills",
      component: Bills,
    },
    {
      path: "/bills/report",
      name: "BillsReport",
      component: BillsReport,
    },
  ],
});

export default router;
