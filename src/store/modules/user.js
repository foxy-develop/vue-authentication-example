import { USER_REQUEST, USER_ERROR, USER_SUCCESS, USER_SWITCH_MODE } from "../actions/user";
import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";
import axios from "axios";
import {AUTH_LOGOUT } from "../actions/auth";

const state = {
  status: "",
  profile: {},
  displayMode: "dark",
};


const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
  isDarkMode: state => state.displayMode === "dark"
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    return new Promise(resolve => {
      Vue.use(AxiosPlugin);
      axios.defaults.headers.common['X-API-KEY'] = 'c8578dcef57c0e7d97d88707614f1184';
      axios.defaults.baseURL = 'https://cliff.world/api/';
      commit(USER_REQUEST);
      const token = localStorage.getItem('user-token');
      axios.post(
        `user/profile`,
        { token })
        .then(resp => {
          console.log(resp);
          if (resp.data.status) {
            commit(USER_SUCCESS, resp);
            resolve();
          }
        })
        .catch(() => {
          commit(USER_ERROR);
          // if resp is unauthorized, logout, to
          dispatch(AUTH_LOGOUT);
          resolve();
        });
    });
  },
  [USER_SWITCH_MODE]: ({ commit }, { token }) => {
    return new Promise(resolve => {
      const theme = state.displayMode;
      axios.post(
        `user/settheme`,
        { token, theme })
      .then(resp => {
        if ( resp.data.status ) {
          commit(USER_SWITCH_MODE);
          resolve();
        }
      })
    });
  }
};

const mutations = {
  [USER_SWITCH_MODE]: state => {
    state.displayMode = localStorage.getItem("displayMode") === 'dark' ? 'light' : 'dark';
    localStorage.setItem("displayMode", state.displayMode);
  },
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.displayMode = resp.data.profile.theme;
    localStorage.setItem("displayMode", resp.data.profile.theme);
    state.status = "success";
    Vue.set(state, "profile", resp.data.profile);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {};
    localStorage.removeItem("displayMode");
    Vue.set(state, "displayMode", 'dark');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
