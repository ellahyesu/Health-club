import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Community from "./views/Community";

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
      path: "/community",
      component: Community
    }
  ]
});

export default router;