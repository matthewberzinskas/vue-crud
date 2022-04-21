import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount('#app');