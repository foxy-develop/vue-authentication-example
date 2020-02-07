import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import pass from "./modules/passAuth";
import chart from "./modules/charts";
import AxiosPlugin from "vue-axios-cors";
Vue.use(Vuex);
Vue.use(AxiosPlugin);


const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    auth,
    pass,
    user,
    chart
  },
  strict: debug
});
