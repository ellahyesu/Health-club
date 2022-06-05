import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Beginner from "./views/Beginner";
import MiddleClass from "./views/MiddleClass";
import Pro from "./views/Pro";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/menu",
      component: Menu
    },
    {
      path: "/beginner",
      component: Beginner
    },
    {
      path: "/midclass",
      component: MiddleClass
    },
    {
      path: "/pro",
      component: Pro
    }
  ]
});

export default router;