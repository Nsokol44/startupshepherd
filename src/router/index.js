import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import About from "../views/About.vue";
import Resources from "../views/Resources.vue";



Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: 'Home'
        }
      },
    {
        path: "/services",
        name: "Services",
        component: Services,
        meta: {
          title: 'Services'
        }
      },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
          title: 'About'
        }
      },
    {
        path: "/resources",
        name: "Resources",
        component: Resources,
        meta: {
          title: 'Resources'
        }
      },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | StartupShepherd`;
    next();
  });
    

export default router;