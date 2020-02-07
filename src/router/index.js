import Vue from "vue";
import Router from "vue-router";

import store from "../store";

Vue.use(Router);

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard');
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login');
const Mentions = () => import(/* webpackChunkName: "mentions" */ '../views/Mentions');


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};


const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

// const ifProfileLoaded = () => new Promise(resolve =>
//     store.getters.isProfileLoaded.then(resp => resolve(resp)));

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Dashboard,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/mentions",
      name: "Mentions",
      component: Mentions,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      name: "Login",
      meta: { darkMode: true },
      component: Login,
      beforeEnter: ifNotAuthenticated
    }
  ]
});
