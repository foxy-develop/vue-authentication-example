import { USER_REQUEST, USER_ERROR, USER_SUCCESS, USER_SET_MODE, USER_SWITCH_MODE } from "../actions/user";
import apiCall from "utils/api";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";

const state = { status: "", profile: {}, displayMode: "dark" };

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
  isDarkMode: state => state.displayMode === "dark"
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    apiCall({ url: "user", method: "POST" })
      .then(resp => {
        commit(USER_SUCCESS, resp);
        commit(USER_SET_MODE, resp);
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
  },
  [USER_SET_MODE]: ({ commit }) => {
    return new Promise(resolve => {
      commit(USER_SET_MODE);
      resolve();
    });
  },
  [USER_SWITCH_MODE]: ({ commit }) => {
    return new Promise(resolve => {
      commit(USER_SWITCH_MODE);
      resolve();
    });
  }
};

const mutations = {
  [USER_SET_MODE]: (state, resp) => {
    if (!localStorage["displayMode"] ) {
      localStorage.setItem("displayMode", resp.displayMode);
    }
    Vue.set(state, "displayMode", localStorage["displayMode"]);
  },
  [USER_SWITCH_MODE]: state => {
    if (localStorage["displayMode"] ) {
      state.displayMode = localStorage["displayMode"] === 'dark' ? 'light' : 'dark';
    } else {
      state.displayMode = state.displayMode === 'dark' ? 'light' : 'dark';
    }
    Vue.set(state, "displayMode", state.displayMode);
    localStorage.setItem("displayMode", state.displayMode);
  },
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
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
