/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";
import { USER_REQUEST } from "../actions/user";
import { PASS_LOGOUT} from "../actions/pass";
import axios from "axios";

const state = {
  status: "",
  hasLoadedOnce: false,
  token: localStorage.getItem("user-token") || '',
  message: ''
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};


const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, { password, phone }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      axios.post(
        `auth/login`,
        { password, phone })
        .then(resp => {
          if ( resp.data.status ) {
            const token = resp.data.token;
            localStorage.setItem('user-token', token);
            axios.defaults.headers.common['Access-Token'] = token;
            commit(AUTH_SUCCESS, resp);
            dispatch(USER_REQUEST);
            resolve(resp);
          } else {
            commit(AUTH_ERROR);
            localStorage.removeItem("user-token");
            resolve();
          }
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      axios.get(`auth/logout`)
      .then(resp => {
        commit(AUTH_LOGOUT);
        commit(PASS_LOGOUT);
        localStorage.removeItem('user-token');
        localStorage.removeItem("displayMode");
        delete axios.defaults.headers.common['Access-Token'];
        resolve();
      });
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: ( state, resp ) => {
    state.message = '';
    state.status = resp.data.status;
    state.hasLoadedOnce = true;
    state.token = resp.data.token;
  },
  [AUTH_ERROR]: ( state, resp ) => {
    state.message = resp.data.message;
    state.status = false;
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.phone = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
