/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";
import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";
import axios from "axios";


const state = {
  status: "",
  hasLoadedOnce: false,
  token: localStorage.getItem("user-token")
};

const getters = {
  isAuthenticated: () => !!state.token,
};



const actions = {
  [AUTH_REQUEST]: ({ commit }, { password, token }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      Vue.use(AxiosPlugin);
      axios.post(
        `auth/login`,
        { password, token })
        .then(resp => {
          commit(AUTH_SUCCESS, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }, { token }) => {
    return new Promise(resolve => {
      Vue.use(AxiosPlugin);
      axios.post(
          `auth/logout`,
          { token })
      .then(resp => {
        console.log(resp);
        commit(AUTH_LOGOUT);
        resolve();
      });
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    if ( resp.data.status ) {
      state.status = "success";
      state.hasLoadedOnce = true;
      state.token = resp.data.token;
      localStorage.setItem('user-token', resp.data.token);
      axios.defaults.headers.common['token'] = resp.data.token;
    } else {
      state.token = "";
      state.phoneToken = "";
      localStorage.removeItem("user-token");
    }
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
    localStorage.removeItem("user-token");
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.phoneToken = "";
    localStorage.removeItem("user-token");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
