import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Loading from "components/lib/loading";
import CenterContainer from "components/lib/center-container";
import axios from 'axios';
import AxiosPlugin from "vue-axios-cors";


Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

axios.defaults.headers.common['X-API-KEY'] = 'c8578dcef57c0e7d97d88707614f1184';
axios.defaults.baseURL = 'https://cliff.world/api/';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Access-Token'] = token;
}

Vue.component("loading", Loading);
Vue.component("center-container", CenterContainer);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
