import { USER_REQUEST, USER_ERROR, USER_SUCCESS, USER_SWITCH_MODE } from "../actions/user";
import axios from "axios";
import Vue from "vue";
import {AUTH_LOGOUT } from "../actions/auth";
import {DATA_REQUEST} from "../actions/charts";
import {MENTIONS_REQUEST, MENTIONS_FILTER_REQUEST} from "../actions/mentions";

const state = {
  status: "",
  profile: {},
  displayMode: localStorage.getItem('displayMode') || '',
};


const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
  theme: state => state.displayMode
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    return new Promise(resolve => {
      commit(USER_REQUEST);
      axios.get(`user/profile`)
        .then(resp => {
          if (resp.data.status) {
            commit(USER_SUCCESS, resp);
            dispatch(DATA_REQUEST);
            dispatch(MENTIONS_REQUEST);
            dispatch(MENTIONS_FILTER_REQUEST);
            resolve();
          } else {
            commit(USER_ERROR);
            dispatch(AUTH_LOGOUT);
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
  [USER_SWITCH_MODE]: ({ commit }) => {
    return new Promise(resolve => {
      const theme = state.displayMode === 'dark' ? 'light' : 'dark';
      axios.post(
        `user/settheme`,
        { theme })
      .then(resp => {
        if ( resp.data.status ) {
          localStorage.setItem("displayMode", theme);
          commit(USER_SWITCH_MODE);
          resolve();
        }
      })
    });
  }
};

const mutations = {
  [USER_SWITCH_MODE]: state => {
    state.displayMode = localStorage.getItem("displayMode");
  },
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.displayMode = resp.data.profile.theme;
    localStorage.setItem("displayMode", resp.data.profile.theme);
    Vue.set(state, "profile", resp.data.profile);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {};
    state.displayMode = 'dark';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
