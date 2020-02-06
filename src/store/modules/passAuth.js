/* eslint-disable promise/param-names */
import {
  PASS_REQUEST,
  PASS_ERROR,
  PASS_SUCCESS
} from "../actions/pass";

import axios from "axios";


const state = {
  status: "",
  hasLoadedOnce: false,
  phoneToken: "",
  message: ''
};

const getters = {
  isPhoneApproved: state => !!state.status && !!state.phoneToken,
  getToken: state => state.phoneToken,
  getMessage: state => state.message,
  hasError: state => state.status === false
};

const actions = {
  [PASS_REQUEST]: ({ commit }, phone ) => {
    return new Promise((resolve, reject) => {
      commit(PASS_REQUEST);
      axios.defaults.headers.common['X-API-KEY'] = 'c8578dcef57c0e7d97d88707614f1184';
      axios.defaults.baseURL = 'https://cliff.world/api/'
      axios.post('auth', { phone } )
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
  [PASS_SUCCESS]: (state, resp) => {
    state.status = resp.data.status;
    state.hasLoadedOnce = true;
    if ( state.status ) {
      state.phoneToken = resp.data.token;
      state.message = '';
    } else {
      state.message = resp.data.message;
    }

  },
  [PASS_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
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
