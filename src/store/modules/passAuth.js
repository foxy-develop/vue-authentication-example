/* eslint-disable promise/param-names */
import {
  PASS_REQUEST,
  PASS_ERROR,
  PASS_SUCCESS
} from "../actions/pass";
import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";
import axios from "axios";

const state = {
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isPhoneApproved: state => state.status === "success"
};

const actions = {
  [PASS_REQUEST]: ({ commit }, phone) => {
    return new Promise((resolve, reject) => {
      Vue.use(AxiosPlugin);
      axios.defaults.headers.common['X-API-KEY'] = 'c8578dcef57c0e7d97d88707614f1184';
      axios.post('https://cliff.world/api/auth', {phone: phone })
        .then(resp => {
          console.log(resp);
          commit(PASS_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(PASS_ERROR, err);
          reject(err);
        });
    });
  },
};

const mutations = {
  [PASS_REQUEST]: state => {
    state.status = "loading";
  },
  [PASS_SUCCESS]: state => {
    state.status = "success";
    state.hasLoadedOnce = true;
  },
  [PASS_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
